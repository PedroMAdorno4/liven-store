import { ShoppingCartIcon } from '@heroicons/react/solid';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logout } from '../redux/actions/isLogged'

function Navbar() {
    const isLogged = useSelector(state => state.isLogged)
    const dispatch = useDispatch();

    return <div className='h-12 fixed top-0 w-full bg-indigo-700 text-white z-50'>
        <nav className='w-full h-full flex items-center'>
            {/* Left aligned items */}
            <div className='mr-auto'>
                {!isLogged &&
                    <NavLink to='/'
                        className={({ isActive }) => `nav-link ${isActive ? 'active-nav-link' : 'inactive-nav-link'}`}>
                        Home
                    </NavLink>
                }

                {isLogged &&
                    <NavLink to='/products'
                        className={({ isActive }) => `nav-link ${isActive ? 'active-nav-link' : 'inactive-nav-link'}`}>
                        Produtos
                    </NavLink>
                }
            </div>

            {/* Right aligned items */}
            {isLogged &&
                <div className='flex'>
                    <NavLink to='/cart'
                        className={({ isActive }) => `ml-auto nav-link flex ${isActive ? 'active-nav-link' : 'inactive-nav-link'}`}>
                        <ShoppingCartIcon className='w-5 h-5 mr-2' />
                        <span>Carrinho</span>
                    </NavLink>
                    <button className='nav-link inactive-nav-link' onClick={() => dispatch(logout())}>Sair</button>
                </div>
            }
        </nav>
    </div>;
}

export default Navbar;
