'use client'

import Image from 'next/image'
import React from 'react'
import logo from '../../public/logo.svg'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
    {
        href: "/",
        label: "Home"
    },
    {
        href: "/posts",
        label: "Posts"
    },
    {
        href: "/create-post",
        label: "Create post"
    }
]

const Header = () => {
    const pathname= usePathname()    

    return (
        <header className='flex items-center justify-between py-4 px-7 border-b'>
            <Link href={"/"}><Image className='w-[35px] h-[35px]' width={"40"} height={"40"} src={logo} alt='logo' /></Link>

            <nav>
                <ul className='flex gap-x-5 text-[14px]'>
                    {
                        navLinks.map((link) => (
                            <li className={`${pathname === link.href ? "text-zinc-900": "text-zinc-400"}`} key={link.href}> <Link href={link.href}>{link.label}</Link> </li>
                        ))
                    }
                </ul>
            </nav>
        </header>
    )
}

export default Header