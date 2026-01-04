import payloadConfig from "@/payload.config"
import { getPayload } from "payload"

export const getPayloadInstance = async () => {
     const payload = await getPayload({ config: payloadConfig })
     return payload
}
