import H2 from '@/components/system.h2'
import Main from '@/layouts/system.layouts'
import React, { Fragment } from 'react'


import { useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'


import { AiOutlineUser } from 'react-icons/ai'
import { BsArrowRepeat, BsCheckLg } from 'react-icons/bs'

export default function System_Administrators_Add() {

  const [fieldsValue, setFieldsValue] = useState({ name: '', surname: '', email: '', password: '', rol: '', rolName: 'Selecciona Rol' })

  const inputChange = ({ target }) => {

    const { name, value } = target;
    setFieldsValue({ ...fieldsValue, [name]: value })
  }

  const people = [
    { name: 'Administrador', id: '1' },
    { name: 'Administrador De Usuarios', id: '2' },
    { name: 'Operador', id: '3' },
    { name: 'Supervisor', id: '4' },
  ]

  return (
    <Main>
      <H2 category={'Registros'} title={'Agregar Administrador'} />
      <div className='w-11/12 bg-white m-10 mt-10 p-10 rounded-3xl drop-shadow-sm dark:bg-dark-1'>
        <div className='py-10 border-b-2 border-light-2'>
          <h1 className='text-xl'>Perfil</h1>
        </div>

        <form className='py-10'>
          <div className='flex items-center mb-8'>
            <div className='w-28 h-28 bg-light-2 flex justify-center items-center m-auto rounded-full text-blue-500 text-5xl' >
              <AiOutlineUser />
            </div>
          </div>

          <div className='grid grid-cols-2 gap-y-6 gap-x-4'>
            <input type='text' name='name' value={fieldsValue.name} className='w-full bg-light-1 py-2 px-4 outline-none rounded-lg dark:bg-dark-3' onChange={inputChange} placeholder='Nombre(s)' />
            <input type='text' name='surname' value={fieldsValue.surname} className='w-full bg-light-1 py-2 px-4 outline-none rounded-lg dark:bg-dark-3' onChange={inputChange} placeholder='Apellido(s)' />

            <input type='text' name='email' value={fieldsValue.email} className='w-full bg-light-1 py-2 px-4 outline-none rounded-lg dark:bg-dark-3' onChange={inputChange} placeholder='Correo' />
            <input type='number' value={fieldsValue.password} className='w-full bg-light-1 py-2 px-4 outline-none rounded-lg' placeholder='Documento de Identidad' />
          </div>

          <Listbox as={'div'} className='relative mt-6' onChange={(target) => { setFieldsValue({ ...fieldsValue, rol: target.id, rolName: target.name }) }}>

            <Listbox.Button className='cursor-pointer relative w-full rounded-lg bg-light-1 py-2 pl-3 pr-10 text-left outline-none sm:text-sm dark:bg-dark-3'>
              <span className='block truncate'>{fieldsValue.rolName}</span>
              <span className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2'>...</span>
            </Listbox.Button>

            <Transition as='div' leave='transition ease-in duration-100' leaveFrom='opacity-100' leaveTo='opacity-0'>
              <Listbox.Options className='absolute w-full max-h-60 bg-light-1 overflow-auto mt-1 py-1 rounded-md shadow-lg text-base outline-none sm:text-sm dark:bg-dark-3'>
                {people.map((person, personIdx) => (
                  <Listbox.Option className='cursor-pointer relative select-none py-2 pl-10 pr-4 hover:bg-light-2 dark:hover:bg-dark-1' key={personIdx} value={person}>
                    {({ selected }) => (
                      <>
                        <span className='block truncate'>{person.name}</span>
                        {selected ? (<span className='absolute inset-y-0 left-0 flex items-center pl-3'><BsCheckLg /></span>) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </Listbox>

          <hr className='my-10 border-light-2 dark:border-dark-3' />

          <div className='flex justify-end'>
            <button type='submit' className='bg-light-1 py-2 px-4 rounded-lg font-medium transition-colors hover:bg-light-2 dark:bg-dark-3 dark:hover:bg-dark-2'>Registrar</button>
          </div>
        </form>
      </div>
    </Main>
  )
}
