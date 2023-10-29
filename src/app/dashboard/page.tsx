'use client'

import Cookie from 'js-cookie'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button";

export default function Dashboard() {

  const router = useRouter()

  function handleLogout() {
    Cookie.remove('auth_token')
    router.push('/')
  }

  return (
    <div>
      Aqui está logado
      <Button onClick={handleLogout} className="w=1/4 h-15 p-2 bg-red-600 rounded">Logout</Button>
    </div>
  )
}
