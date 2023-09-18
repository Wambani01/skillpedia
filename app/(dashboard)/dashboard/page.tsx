'use client'
import Image from 'next/image'
import { options } from '@/app/api/auth/[...nextauth]/options'
import { getServerSession } from 'next-auth/next'
import { redirect } from 'next/navigation'

export default async function Dashboard() {
  const session = await getServerSession(options)
  { console.log(session?.user?.image) }

  const imageLoader = (session: any) => {
    return `session.user.image`
  }

  if (!session) {
    console.log(JSON.stringify(session))
    redirect('/api/auth/signin?callbackUrl=/dashboard')
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex text-black">Dashboard: {session?.user?.name}</div>

      <Image loader={imageLoader} src={`session?.user?.image`} width={400} height={400} alt="Picture of the author" />
    </main>
  )
}
