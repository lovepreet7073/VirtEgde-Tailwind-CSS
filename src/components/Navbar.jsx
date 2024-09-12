import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navItems } from '../constants'; // Make sure navItems includes hrefs that match section IDs
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Navbar = () => {
    const [mobileDraw, setmobileDraw] = useState(false);

    const togglenavbar = () => {
        setmobileDraw(!mobileDraw);
    };

    return (
        <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
            <div className="container px-4 mx-auto relative text-sm">
                <div className="flex justify-between items-center">
                <Link to="/#hero">
                        <div className="flex items-center flex-shrink-0 cursor-pointer">
                            <img className='h-10 w-10 mr-2' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuHBOvXVQSQbb0Yadd7iA4jrXDbQqmIHFTyA&s" alt="" />
                            <span className='text-xl tracking-tight'>VirtEdge</span>
                        </div>
                    </Link>

                    <ul className='hidden lg:flex ml-14 space-x-12'>
                        {navItems.map((item, index) => (
                            <li key={index}>
                                <Link to={`/#${item.href}`} className='hover:text-red-500'>
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className='hidden lg:flex ml-14 space-x-12 items-center'>
                        <Link to='/signin' className='py-2 px-3 border rounded-md'>
                            Sign In
                        </Link>
                        <Link to='/signup' className='bg-gradient-to-r from-red-400 to-orange-400 py-2 px-3 rounded-md'>
                            Create an account
                        </Link>
                    </div>
                    <div className="lg:hidden md:flex flex-col justify-end">
                        <button onClick={togglenavbar}>
                            {mobileDraw ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
                {mobileDraw && (
                    <div className="first fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
                        <ul>
                            {navItems.map((item, index) => (
                                <li key={index} className='py-4 first'>
                                    <Link to={`/#${item.href}`} className='hover:text-red-500'>
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <div>
                            <Link to='/signin' className='py-2 px-3 border rounded-md'>Sign In</Link>
                            <Link to='/signup' className='bg-gradient-to-r from-red-500 to-orange-500 py-2 px-3 rounded-md ml-2'>Create an account</Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
