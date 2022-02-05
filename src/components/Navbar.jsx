import { ShoppingCartIcon } from '@heroicons/react/solid';
import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return <div className='h-12 fixed w-full bg-indigo-700 text-white'>
        <nav className='w-full h-full flex items-center'>
            {/* Left aligned items */}
            <div className='mr-auto'>
                <NavLink to='/'
                    className={({ isActive }) => `nav-link ${isActive ? 'active-nav-link' : 'inactive-nav-link'}`}>
                    Home
                </NavLink>

                <NavLink to='/login'
                    className={({ isActive }) => `nav-link ${isActive ? 'active-nav-link' : 'inactive-nav-link'}`}>
                    Login
                </NavLink>

                <NavLink to='/register'
                    className={({ isActive }) => `nav-link ${isActive ? 'active-nav-link' : 'inactive-nav-link'}`}>
                    Register
                </NavLink>

                <NavLink to='/products'
                    className={({ isActive }) => `nav-link ${isActive ? 'active-nav-link' : 'inactive-nav-link'}`}>
                    Products
                </NavLink>
            </div>

            {/* Right aligned items */}
            <div className=''>
                <NavLink to='/cart'
                    className={({ isActive }) => `ml-auto nav-link flex ${isActive ? 'active-nav-link' : 'inactive-nav-link'}`}>
                    <ShoppingCartIcon className='w-5 h-5 mr-2' />
                    <span>Carrinho</span>
                </NavLink>

            </div>
        </nav>
    </div>;
}

export default Navbar;
