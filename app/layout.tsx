import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/app/components/navbar/Navbar'
import Sidenav from '@/app/components/sidenav/Sidenav'
import AuthProvider from './context/AuthProvider'
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Skillpedia',
    description: 'Skillpedia: learning and sharing skills.',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={inter.className}>

                <AuthProvider>
                    <div className="flex flex-col">

                        <Navbar />
                        <div className='flex'>
                            <Sidenav />
                            {children}
                        </div>

                        <Toaster />
                    </div>
                </AuthProvider>

            </body>
        </html>
    )
}
