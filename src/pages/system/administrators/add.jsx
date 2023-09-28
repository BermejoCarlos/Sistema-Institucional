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

  function generatePasword() {
    let password = ''
    const caracteres = 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnÑñOoPpQqRrSsTtUuVvWwXxYyZz1234567890!@#$%'

    for (let i = 0; i < 16; i++) { password += caracteres.split('')[Math.floor(Math.random() * caracteres.length)] }

    setFieldsValue({ ...fieldsValue, password: password })
    console.log(fieldsValue.rol);
  }
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

          <hr className='my-10 border-light-2 dark:border-dark-3' />

          <div className='flex justify-end'>
            <button type='submit' className='bg-blue-500 py-2 px-4 rounded-lg text-white duration-200 hover:bg-blue-700'>Registrar</button>
          </div>
        </form>
      </div>
    </Main>
  )
}