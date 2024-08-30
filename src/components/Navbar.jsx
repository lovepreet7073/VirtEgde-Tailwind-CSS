import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navItems } from '../constants'
const Navbar = () => {
    const [mobileDraw, setmobileDraw] = useState(false);

    const togglenavbar = () => {
        setmobileDraw(!mobileDraw)
    }
    return (
        <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
            <div className="container px-4 mx-auto relative text-sm">
                <div className="flex justify-between items-center">
                    <div className="flex items-center flex-shrink-0">
                        <img className='h-10 w-10 mr-2' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuHBOvXVQSQbb0Yadd7iA4jrXDbQqmIHFTyA&s" alt="" />
                        <span className='text-xl tracking-tight'>VirtEdge</span>
                    </div>
                    <ul className='hidden lg:flex ml-14 space-x-12'>
                        {navItems.map((item, index) => (
                            <li key={index}>
                                <a href={item.href}>
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <div className='hidden lg:flex ml-14 space-x-12 items-center'>
                        <a href='' className='py-2 px-3 border rounded-md'>
                            Sign In
                        </a>
                        <a href='' className='bg-gradient-to-r from-red-400 to-orange-400 py-2 px-3 rounded-md'>
                            Create an account
                        </a>
                    </div>
                    <div className="lg:hidden md:flex flex-col justify-end">
                        <button onClick={togglenavbar}>
                            {mobileDraw ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
                {mobileDraw && (
                    <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
                        <ul className=''>
                            {navItems.map((item, index) => (
                                <li key={index} className='py-4'>
                                    <a href={item.href}>
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <div>
                            <a href="" className='py-2 px-3 border rounded-md'>Sign In</a>
                            <a href=""  className='bg-gradient-to-r from-red-500 to-orange-500 py-2 px-3 rounded-md  ml-2'>Create an account</a>
                        </div>
                    </div>
                )}
            </div>

        </nav>
    )
}

export default Navbar