import Image from 'next/image'

export default function Home() {
  return (
    <main className="p-10">
      <div className='p-8 flex flex-col w-1/2'>
        <p className='text-8xl'>Learn Without</p>
        <span className='text-8xl'>Limits</span>

        <div className='space-y-4'>
          <p className='w-3/4 text-ellipsis'>Join your peers in learning the course of your choice today. Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quibusdam ex odio maiores dolores sequi quisquam ratione nulla. Eius velit atque, sapiente deleniti voluptatibus excepturi illo minus impedit debitis officiis.</p>


          <div className='flex gap-x-8 w-full text-2xl'>
            <div className='w-2/5 h-16 bg-slate-700 text-2xl text-white flex items-center justify-center hover-cursor'>
              Peer<span className='text-orange-600'>Zone</span>
            </div>
            <div className='w-3/5 h-16 border-2 border-slate-700 flex items-center justify-center'>
              Join Our Learning Community
            </div>
          </div>


        </div>
      </div>
    </main>
  )
}
