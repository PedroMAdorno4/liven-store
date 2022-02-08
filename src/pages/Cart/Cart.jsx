import React from 'react';
import { useSelector } from 'react-redux';
import ProductList from './ProductList';
import Checkout from './Checkout';
import { Link } from 'react-router-dom';

function Cart() {
    const productsInCart = useSelector(state => state.cart.products)

    return (
        <>
            {
                productsInCart.length ?
                    <>
                        <div className='responsive-container h-full'>
                            <ProductList productList={productsInCart} />
                            <Checkout />
                        </div>
                    </> :
                    <>
                        <div className='centered-page h-full space-y-8'>
                            <EmptyCart />
                        </div>
                    </>
            }
        </>
    );
}

export default Cart;

function EmptyCart() {
    return (
        <>
            <div className='flex flex-col space-y-8 text-center'>

                <p>Nenhum produto adicionado ;(</p>
                <Link to={'/products'} className='button-primary'>Continuar comprando</Link>
            </div>
        </>
    )
}