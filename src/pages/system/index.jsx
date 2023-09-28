import Main from '@/layouts/system.layouts'
import React from 'react'

export default function System_Home() {
    return (
        <Main>
            <div>
                Bienvenido
            </div>

            <section className='w-11/12 mt-20'>
                <div className='w-full h-36 bg-white flex justify-between py-2 px-10 rounded-xl'>
                    <div className='flex flex-col justify-center gap-1'>
                        <h2 className='font-medium text-blue-400 text-2xl'>Bienvenid@ Administrador!</h2>
                        <p className='text-gray-400'>Sistema de administracion estudiantil (nombre de la insttitucion)</p>
                    </div>
                    <img src="/img/system_illustrations/administrations.svg" alt="" />
                </div>
                <div className="grid grid-cols-3 gap-1.5 mt-1.5">
                    <div className='h-36 bg-white rounded-xl'></div>
                    <div className='h-36 bg-white rounded-xl'></div>
                    <div className='h-36 bg-white rounded-xl'></div>
                    <div className='h-36 bg-white rounded-xl'></div>
                    <div className='h-36 bg-white rounded-xl'></div>
                    <div className='h-36 bg-white rounded-xl'></div>
                </div>
            </section>

            <section className='w-11/12 mt-20'>
                <div className='w-full h-36 bg-white rounded-xl'></div>
            </section>
        </Main>
    )
}
