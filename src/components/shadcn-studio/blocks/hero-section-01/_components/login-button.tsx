import { Button } from '@/components/ui/button'
import React from 'react'

const LoginButton = () => {
    return (
        <Button className='rounded-lg' asChild>
            <a href='#'>Login</a>
        </Button>
    )
}

export default LoginButton
