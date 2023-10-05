import Head from 'next/head'

// C O M P O N E N T S
import Nav from '@/components/system.nav'
import { Toaster } from 'react-hot-toast'

export default function Main({ children }) {

    return (
        <>
            <Head>
                <title>Admin</title>
            </Head>
            <Nav />

            <main className='w-[calc(100%-18rem)] min-h-screen overflow-hidden float-right flex flex-col items-center py-20'>
                {children}
            </main>

            <Toaster position="top-right" toastOptions={{ className: 'text-blue-400', }} />
        </>
    )
}
