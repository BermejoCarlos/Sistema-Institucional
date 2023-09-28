import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'

import { HiOutlineEllipsisHorizontal } from 'react-icons/hi2';
import { AiOutlineDelete, AiOutlineEdit, AiOutlineEye } from 'react-icons/ai';
import { useStateContext } from '@/context/ContextProvider';

export default function Example() {
    const { themeColor, showSidebar, setShowSidebar, screenSize } = useStateContext();

    return (
        <div>
            <Menu as="div" className="relative">
                <Menu.Button className="bg-light-1 p-2 rounded-full text-xl group-hover/options:bg-light-2 dark:bg-dark-3 group-hover/options:dark:bg-dark-1">
                    <HiOutlineEllipsisHorizontal />
                </Menu.Button>
                <Transition as={Fragment} enter="transition ease-out duration-100" enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-75" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95">
                    <Menu.Items className=" z-10 absolute -left-2/4 top-3/4 w-40 bg-white mt-2 origin-top-right divide-y divide-light-2 rounded-md drop-shadow dark:bg-dark-1 dark:divide-dark-3">
                        <div className="px-1 py-1 ">
                            <Menu.Item>
                                <button className={`group w-full flex items-center gap-2 px-2 py-2 rounded-md text-sm hover:bg-blue-500 hover:text-white`}>
                                    <AiOutlineEye /> <span>Ver</span>
                                </button>
                            </Menu.Item>
                            <Menu.Item>
                                <button className={`group w-full flex items-center gap-2 px-2 py-2 rounded-md text-sm hover:bg-blue-500 hover:text-white`}>
                                    <AiOutlineEdit /> Editar
                                </button>
                            </Menu.Item>
                        </div>
                        <div className="px-1 py-1">
                            <Menu.Item>
                                <button className={`group w-full flex items-center gap-2 px-2 py-2 rounded-md text-sm hover:bg-blue-500 hover:text-white`}>
                                    <AiOutlineDelete /> Eliminar
                                </button>
                            </Menu.Item>
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>
        </div>
    )
}
