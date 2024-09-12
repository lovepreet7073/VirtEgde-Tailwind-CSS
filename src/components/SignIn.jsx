import React from 'react'
import { Link } from 'react-router-dom'
import { Mail, LockKeyhole } from 'lucide-react'
const SignIn = () => {
    return (
        <div className='flex items-center justify-center bg-black-100'>
            <div className='bg-neutral-900 border border-neutral-700 rounded-md p-8 max-w-sm w-full shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-30 relative'>
                <form className='space-y-6'>
                    <h1 className='text-3xl  text-white text-center'>Sign In</h1>

                    <div className='relative my-4'>
                        <input
                            type="email"
                            id='email'
                            className='block w-full py-2.5 px-0 text-sm bg-transparent text-white border-0 border-b-2 border-neutral-300 appearance-none focus:outline-none focus:ring-0 focus:border-orange-500 peer'
                            placeholder=' '
                        />

                        <label htmlFor='email' className='absolute text-sm text-gray-300 duration-300 transform -translate-y-3 scale-75 top-2 left-0 origin-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-orange-500 peer-focus:text-lg'>
                            Email
                        </label>
                        <Mail className='absolute top-3 right-4 text-neutral-400' />
                    </div>

                    <div className='relative my-4'>
                        <input
                            type="password"
                            id='password'
                            className='block w-full py-2.5 px-0 text-sm bg-transparent text-white border-0 border-b-2 border-neutral-300 appearance-none focus:outline-none focus:ring-0 focus:border-orange-500 peer'
                            placeholder=' '
                        />
                        <label htmlFor='password' className='absolute text-sm text-gray-300 duration-300 transform -translate-y-3 scale-75 top-2 left-0 origin-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-orange-500 peer-focus:text-lg'>
                            Password
                        </label>
                        <LockKeyhole className='absolute top-3 right-4 text-neutral-400' />
                    </div>

                    <div className='flex items-center justify-between'>
                        <div className='flex items-center'>
                            <input
                                type='checkbox'
                                id='rememberMe'
                                className='text-slate-400'
                            />
                            <label htmlFor='rememberMe' className='text-gray-300 ml-2 sm:text-sm'>Remember me</label>
                        </div>
                        <span className='text-orange-500 cursor-pointer hover:underline sm:text-sm'>Forgot Password?</span>
                    </div>

                    <button
                        type='submit'
                        className='w-full bg-orange-500 transition duration-200 py-2 rounded-md border border-transparent hover:bg-transparent hover:border-orange-500 hover:text-orange-500'
                    >
                        Sign In
                    </button>



                    <div className='text-gray-300 text-center'>
                        <span>New Here? <Link to='/signup' className='text-orange-500 hover:underline'>Create an account</Link></span>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignIn
