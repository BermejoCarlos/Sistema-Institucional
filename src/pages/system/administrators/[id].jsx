import H2 from '@/components/system.h2'
import Main from '@/layouts/system.layouts'
import React, { Fragment, useEffect } from 'react'
import Axios from 'axios'


import { useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'


import { AiOutlineUser } from 'react-icons/ai'
import { BsArrowRepeat, BsCheckLg } from 'react-icons/bs'
import { Router, useRouter } from 'next/router'
import { getAdministrator } from '@/api/administrators.api'
import { useStateContext } from '@/context/ContextProvider'

export default function System_Administrators_Add() {

  const router = useRouter();
  
  const { id } = router.query;

  const [fieldsValue, setFieldsValue] = useState({})

  const inputChange = ({ target }) => {

    const { name, value } = target;
    setFieldsValue({ ...fieldsValue, [name]: value })
  }

  const sendForm = (e) => {

    e.preventDefault();

    Axios.post('http://localhost:4000/administrators/add', fieldsValue).then((response) => {

      console.log(response);
    })
  }

  const administrators = async () => {
    const res = await getAdministrator(id);
    setFieldsValue(res.data);
    console.log(res.data.name);
  };
  console.log(fieldsValue);
  useEffect(() => { administrators() }, [])


  return (
    <Main>
      <H2 category={'Registros'} title={'Editar Administrador'} />
      <div className='w-11/12 bg-white m-10 mt-10 p-10 rounded-3xl drop-shadow-sm dark:bg-dark-1'>
        <div className='py-10 border-b-2 border-light-2'>
          <h1 className='text-xl'>Perfil</h1>
        </div>

        <form className='py-10' onSubmit={sendForm}>
          <div className='flex items-center mb-8'>
            <div className='w-28 h-28 bg-light-2 flex justify-center items-center m-auto rounded-full text-blue-500 text-5xl' >
              <AiOutlineUser />
            </div>
          </div>

          <div className='grid grid-cols-2 gap-y-6 gap-x-4'>
            <input type='text' name='name' value={fieldsValue.name} className='w-full bg-light-1 py-2 px-4 outline-none rounded-lg dark:bg-dark-3' onChange={inputChange} placeholder='Nombre(s)' />
            <input type='text' name='surname' value={fieldsValue.surname} className='w-full bg-light-1 py-2 px-4 outline-none rounded-lg dark:bg-dark-3' onChange={inputChange} placeholder='Apellido(s)' />

            <input type='text' name='email' value={fieldsValue.email} className='w-full bg-light-1 py-2 px-4 outline-none rounded-lg dark:bg-dark-3' onChange={inputChange} placeholder='Correo' />
            <input type='text' name='identificationCard' value={fieldsValue.identificationCard} className='w-full bg-light-1 py-2 px-4 outline-none rounded-lg' onChange={inputChange} placeholder='Documento de Identidad' />
          </div>

          <hr className='my-10 border-light-2 dark:border-dark-3' />

          <div className='flex justify-end'>
            <button type='submit' className='bg-blue-500 py-2 px-4 rounded-lg text-white duration-200 hover:bg-blue-700'>Editar</button>
          </div>
        </form>
      </div>
    </Main>
  )
}