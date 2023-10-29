'use client'

import Cookie from 'js-cookie'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button";

export default function Home() {

  const router = useRouter()

  function handleLogin() {
    Cookie.set('auth_token', 'thbyebccplowimunubybygtvrcexwzzqawexdmnbvbcfghjjytrqwertyuiokjhgfdsa')
    router.push('/dashboard')
  }

  return (
    <div>
      Deslogado ainda
      <Button onClick={handleLogin} className="w=1/4 h-15 p-2 bg-green-600 rounded">Login</Button>
    </div>
  )
}
