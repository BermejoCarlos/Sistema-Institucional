import React from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router';

import { activeLink, links, normalLink, rootLink } from '@/data/system.links';
import { useStateContext } from '@/context/ContextProvider';


// I C O N S
import { FiShoppingBag } from 'react-icons/fi';
import { MdOutlineCancel } from 'react-icons/md';
import { AiFillAppstore, AiOutlineAppstore } from 'react-icons/ai';
import { RiApps2Line } from 'react-icons/ri';

export default function Nav() {

    const { themeColor, showSidebar, setShowSidebar } = useStateContext();
    const router = useRouter()


    return (
        <div className="fixed w-72 h-screen hover:overflow-auto bg-white">
            <div className="md:overflow-hidden md:pb-10">
                <div className="bg-[#3F3D56] flex justify-between items-center py-10 text-white">
                    <Link href={'/'} className="flex items-center gap-3 ml-3 font-extrabold text-xl uppercase tracking-tight">
                        <span>logo</span>
                        <span>Admin</span>
                    </Link>

                    <button type="button" className="hidden mt-4 p-3 rounded-full text-xl hover:bg-light md:block" style={{ color: themeColor }} onClick={() => setShowSidebar(!showSidebar)}>
                        <MdOutlineCancel />
                    </button>
                </div>

                <div className="mt-10">
                    <div>
                        <p className="m-3 mt-4 font-medium text-gray-500 uppercase">Dashboard</p>

                        <Link href={rootLink} className={router.pathname == rootLink ? activeLink : normalLink}>
                            <RiApps2Line />
                            <span className="capitalize">Inicio</span>
                        </Link>
                    </div>

                    {links.map((item, index) => (
                        <div key={index}>
                            <p className="m-3 mt-4 uppercase">{item.title}</p>

                            {item.links.map((link, index) => (
                                <Link href={`${rootLink}${link.link}`} className={router.pathname.startsWith(`${rootLink}${link.link}`) ? activeLink : normalLink} style={{ background: router.pathname.startsWith(link.link) ? 'radial-gradient(at center, #fefefe, #0060fc)' : '' }} key={index}>
                                    {link.icon}
                                    <span className="capitalize">{link.name}</span>
                                </Link>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
