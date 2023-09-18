import Image from 'next/image'
import { options } from '@/app/api/auth/[...nextauth]/options'
import { getServerSession } from 'next-auth/next'
import { redirect } from 'next/navigation'

export default async function Dashboard() {
  const session = await getServerSession(options)


  if (!session) {
    console.log(JSON.stringify(session))
    redirect('/api/auth/signin?callbackUrl=/dashboard')
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex text-black">Dashboard: {session?.user?.name}</div>
    </main>
  )
}
