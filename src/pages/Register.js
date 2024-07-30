import React from 'react'
import LoginRegisterForm from '../components/LoginRegisterForm';
import bg1 from '../docs/bg3.avif';

const Register = () => {
  return (
    <div className='flex flex-col'>
      <div className='p-10'>
        <h1 className='header-home'>CODE CRAFT</h1>
      </div>
      <div className='flex flex-row justify-center items-center px-10 h-full w-full'>
        <div className='pl-10 w-full lg:w-1/2 xl:pl-12'>
            <LoginRegisterForm title='Register' />
        </div>
        <div className='hidden lg:block pl-10 w-1/2'>
            <img src={bg1} alt='background img' className='bg-image' />
        </div>
      </div>
    </div>
  )
}


export default Register