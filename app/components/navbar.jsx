import Link from 'next/link'
import Logo from './dojo-logo.png'
import Image from 'next/image'
import LogoutButton from './LogoutButton'

export default function navbar({ user }) {
  return (
    <nav>
        <Image
        src={Logo}
        alt='Dojo Logo'
        width={70}
        quality={100}
        placeholder='blur'
        />
        <Link href="/" className='font-bold text-primary text-lg hover:text-primary'>Evan's Helpdesk</Link>
        <Link href="/">Dashboard</Link>
        <Link href="/news" className='mr-auto'>news</Link>

        {user && <span>Hello, {user.email}</span>}
        <LogoutButton/>
    </nav>
  )
}
