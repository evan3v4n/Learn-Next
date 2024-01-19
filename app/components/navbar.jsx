import Link from 'next/link'
import React from 'react'
import Logo from './dojo-logo.png'
import Image from 'next/image'

export default function navbar() {
  return (
    <nav>
    <Image
      src={Logo}
      alt='Dojo Logo'
      width={70}
      quality={100}
      placeholder='blur'
      />
        <h1>Dojo helpdesk</h1>
        <Link href="/">Dashboard</Link>
        <Link href="/news">news</Link>
      </nav>
  )
}
