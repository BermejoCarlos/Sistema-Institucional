import React from 'react';
import { AiOutlineShoppingCart, AiOutlineAreaChart, AiOutlineBarChart, AiOutlineStock } from 'react-icons/ai';
import { BsWhatsapp } from 'react-icons/bs';
import { IoMdContacts } from 'react-icons/io';
import { MdWebAsset } from 'react-icons/md';
import { RiAdminLine, RiContactsLine } from 'react-icons/ri';

export const activeLink = 'bg-blue-500 flex items-center gap-5 m-2 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md';
export const normalLink = 'flex items-center gap-5 m-2 pl-4 pt-3 pb-2.5 rounded-lg text-md duration-200 hover:bg-light-1';

export const rootLink = '/system'
export const links = [
    {
        title: 'Usuarios',
        links: [
            {
                name: 'Administradores',
                icon: <AiOutlineShoppingCart />,
                link: '/administrators'
            },
            {
                name: 'Docentes',
                icon: <IoMdContacts />,
                link: '/teachers'
            },
            {
                name: 'Estudiantes',
                icon: <RiContactsLine />,
                link: '/students'
            },
        ],
    },
    {
        title: 'Institucional',
        links: [
            {
                name: 'Asignaturas',
                icon: <MdWebAsset />,
            },
            {
                name: 'Cursos',
                icon: <BsWhatsapp />,
            },
            {
                name: 'Horarios',
                icon: <BsWhatsapp />,
            },
        ],
    },
    {
        title: 'Registros',
        links: [
            {
                name: 'Usuarios de whatsapp',
                icon: <AiOutlineStock />,
            },
            {
                name: 'Abogados',
                icon: <AiOutlineAreaChart />,
            },
            {
                name: 'Administradores',
                icon: <RiAdminLine />
            }
        ],
    },
];
