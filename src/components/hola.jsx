import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'

import { HiOutlineEllipsisHorizontal } from 'react-icons/hi2';
import { AiOutlineDelete, AiOutlineEdit, AiOutlineEye } from 'react-icons/ai';
import { useStateContext } from '@/context/ContextProvider';
import Link from 'next/link';
import { deleteAdministrator } from '@/api/administrators.api';

export default function Example({ id }) {
    const { data, setData } = useStateContext();

    const deleteTask = async () => {
        
        try {
            const res = await deleteAdministrator(id);
            if (res.status === 204){
                setData(data.filter((item) => item._id !== id));
            } 
            console.log(id);
        } catch (error) {
            console.log(error);
        }
    };

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
                                <Link className={`group w-full flex items-center gap-2 px-2 py-2 rounded-md text-sm hover:bg-blue-500 hover:text-white`} href={`/system/administrators/${id}`}>
                                    <AiOutlineEdit /> Editar
                                </Link>
                            </Menu.Item>
                        </div>
                        <div className="px-1 py-1">
                            <Menu.Item>
                                <button className={`group w-full flex items-center gap-2 px-2 py-2 rounded-md text-sm hover:bg-blue-500 hover:text-white`} onClick={deleteTask}>
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
