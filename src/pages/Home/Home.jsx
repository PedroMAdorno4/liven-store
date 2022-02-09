import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className='centered-page flex flex-col space-y-8'>
      <NavCard path='/login' text='Entrar' />
      <NavCard path='/register' text='Criar nova conta' />

    </div>
  )
}

function NavCard({ path = '/', text = 'Link' }) {
  return (

    <Link to={path} className='w-96'>
      <div className='px-12 py-6 bg-indigo-500 text-lg font-medium rounded-md text-white text-center hover:bg-indigo-600'>
        {text}
      </div>

    </Link>
  )
}

export default Home;
