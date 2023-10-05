import { useEffect, useState } from "react";
import { flexRender, getCoreRowModel, useReactTable, getPaginationRowModel } from "@tanstack/react-table";
import Link from "next/link";

// Components
import H2 from '@/components/system.h2';
import Example from "@/components/hola";

// DATAS
import { defaultData } from "@/data/defaultData";

// Icons
import { AiOutlineUser } from "react-icons/ai";
import { HiOutlineSearch } from "react-icons/hi";
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight, MdOutlineKeyboardDoubleArrowLeft, MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import Main from "@/layouts/system.layouts";
import { rootLink } from "@/data/system.links";
import Axios from "axios";
import { useStateContext } from "@/context/ContextProvider";
import { GetAdministrators } from "@/context/administratorsApi.context";
import { getAdministrators } from "@/api/administrators.api";



export default function System_Administrators() {
    const { data, setData } = useStateContext()


    const columns = [
        {
            accessorKey: 'hola',
            header: () => '',
            cell: info => {
                const { name } = info.row.original
                return (
                    <div src="" alt="" className="h-8 w-8 bg-light-2 flex justify-center items-center m-auto rounded-full dark:bg-dark-2">
                        <AiOutlineUser />
                    </div>
                )
            },
            enableSorting: true
        },
        {
            accessorKey: 'name',
            header: () => <span>Nombre</span>,
        },
        {
            accessorKey: 'surname',
            header: () => <span>Apellidos</span>
        },
        {
            accessorKey: 'status',
            header: () => <span>Estado</span>,
            cell: info => {
                return (
                    <span
                        className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600"
                    >
                        <span className="h-1.5 w-1.5 rounded-full bg-green-600"></span>
                        Active
                    </span>
                )
            },
            enableSorting: true
        },
        {
            accessorKey: 'actions',
            header: 'Acciones',
            cell: info => {

                const { _id } = info.row.original
                return (
                    <Example id={_id}></Example>

                )
            },
            enableSorting: false
        }
    ]

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel()
    })

    const administrators = async () => {
        const res = await getAdministrators();
        setData(res.data);
    };

    useEffect(() => { administrators() }, [])
    
    return (
        <Main>
            <H2 category={'Usuarios'} title={'Administradores'} />

            <div className="w-11/12 bg-white m-10 mt-10 p-10 rounded-xl">
                <div className="flex justify-between items-center">
                    <Link href={`${rootLink}/administrators/add`} className="bg-blue-500 flex gap-2 items-center px-4 py-1.5 rounded-lg text-white hover:bg-blue-600">
                        <AiOutlineUser className="text-xl" /> Agregar
                    </Link>

                    <div className="w-1/3 h-10 mb-7 flex items-center">
                        <input type='text' className='w-fulls h-full bg-light-1 pl-3 pr-8 ml-auto rounded-full outline-none text-sm font-medium' id="search" placeholder='Buscar...' />
                        <label htmlFor="search"><HiOutlineSearch className='cursor-pointer -ml-8 text-blue-500 text-xl' /></label>
                    </div>
                </div>

                <table className="w-full mt-10 text-center">
                    <thead>
                        {table.getHeaderGroups().map(headerGroup => (
                            <tr key={headerGroup.id} className="border-b-2 border-light-2 dark:border-dark-3">
                                {headerGroup.headers.map(header => (
                                    <th key={header.id} className="py-2 font-normal text-base">
                                        {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>

                    <tbody>
                        {table.getRowModel().rows.map(row => (
                            <tr key={row.id} className="group/options hover:bg-light-1 dark:hover:bg-dark-3" >
                                {row.getVisibleCells().map(cell => (
                                    <td key={cell.id} className="py-2 px-4 text-sm" >
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>

                <div className='py-10 flex items-center justify-between text-center'>
                    <div className='flex items-center gap-3'>
                        <button className='bg-light-2 p-2 rounded-full disabled:opacity-50' onClick={() => table.setPageIndex(0)} disabled={!table.getCanPreviousPage()}>
                            <MdOutlineKeyboardDoubleArrowLeft />
                        </button>
                        <button className='bg-light-2 p-2 rounded-full disabled:opacity-50' onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>
                            <MdOutlineKeyboardArrowLeft />
                        </button>
                        <button className='bg-light-2 p-2 rounded-full disabled:opacity-50' onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
                            <MdOutlineKeyboardArrowRight />
                        </button>
                        <button className='bg-light-2 p-2 rounded-full disabled:opacity-50' onClick={() => table.setPageIndex(table.getPageCount() - 1)} disabled={!table.getCanNextPage()}>
                            <MdOutlineKeyboardDoubleArrowRight />
                        </button>
                    </div>
                    <select className='cursor-pointer bg-light-2 p-2 outline-none border rounded-lg' onChange={e => { table.setPageSize(Number(e.target.value)) }}>
                        <option value="5">5 pág.</option>
                        <option value="10">10 pág.</option>
                        <option value="20">20 pág.</option>
                        <option value="25">25 pág.</option>
                        <option value="50">50 pág.</option>
                    </select>
                </div>
            </div>
        </Main>
    )
}
