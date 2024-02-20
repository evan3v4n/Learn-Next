import Link from "next/link";
import Image from "next/image";
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import Logo from "../components/dojo-logo.png"
export default async function AuthLayout({children}) {

    const supabase = createServerComponentClient({ cookies })
    const { data } = await supabase.auth.getSession()

    if (data.session) {
        redirect('/login')
    }
    return (
        <main>
            <nav>
                <Image
                src={Logo}
                alt='Dojo Logo'
                width={70}
                quality={100}
                placeholder='blur'
                />
                <Link href="/" className="font-bold text-primary text-lg hover:text-primary">Evan's Helpdesk</Link>
                <Link href="/signup">Signup</Link>
                <Link href="/login">Login</Link>
            </nav>
            {children}
        </main>
    )
}