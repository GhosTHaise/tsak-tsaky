ARG PROXY

FROM ${PROXY}node:22-alpine AS base

ARG RELEASE
ENV NEXT_PUBLIC_RELEASE=$RELEASE

ENV NEXT_TELEMETRY_DISABLED=1
ENV PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1

RUN apk update \
    && apk add --no-cache \
    ca-certificates \
    gosu \
    && rm -rf /var/cache/apk/*

WORKDIR /app

# ---

FROM base AS deps

RUN apk add --no-cache libc6-compat \
    ca-certificates

RUN corepack enable && corepack prepare pnpm --activate

# Copy only package files for dependency installation
COPY package.json pnpm-lock.yaml ./

# Install dependencies with optimizations
RUN pnpm install --frozen-lockfile --prod false \
    && pnpm store prune \
    && rm -rf ~/.pnpm-store ~/.cache

# ---

FROM base AS builder

RUN corepack enable && corepack prepare pnpm --activate

COPY --from=deps /app/node_modules ./node_modules

# Copy configuration files first (these change less frequently)
COPY next.config.ts tsconfig.json ./
COPY components.json eslint.config.ts ./
COPY postcss.config.mjs ./
COPY sentry.server.config.ts sentry.edge.config.ts ./

# Copy source code and other necessary files
COPY src ./src
COPY public ./public
COPY scripts ./scripts
COPY package.json pnpm-lock.yaml ./

RUN NODE_OPTIONS="--max-old-space-size=4096" pnpm lint && pnpm build \
    && pnpm prune --prod

# ---

FROM base AS runner

RUN corepack enable && corepack prepare pnpm --activate

RUN addgroup -g 1001 nodejs && \
    adduser -D -u 1001 -G nodejs nextjs

# Copy required files from builder stage
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.ts ./next.config.ts
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/tsconfig.json ./tsconfig.json
COPY --from=builder /app/src ./src
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next

EXPOSE 3000

CMD [ "./node_modules/.bin/next", "start" ]