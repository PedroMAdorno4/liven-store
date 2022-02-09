import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ProductList from './ProductList';
import Checkout from './Checkout';
import { Link } from 'react-router-dom';
import FinishedOrder from './FinishedOrder';

function Cart() {
    const productsInCart = useSelector(state => state.cart.products)

    const [isPaying, setIsPaying] = useState(false);
    const [paymentMethod, setPaymentMethod] = useState('');

    return (
        <>
            {
                productsInCart.length === 0 && paymentMethod === '' && !isPaying &&
                <div className='centered-page h-full space-y-8'>
                    <EmptyCart />
                </div>
            }
            {paymentMethod !== '' && isPaying &&
                <FinishedOrder paymentMethod={paymentMethod} />
            }
            {productsInCart.length > 0 && !isPaying &&
                <div className='responsive-container h-full'>
                    <ProductList productList={productsInCart} />
                    <Checkout setIsPaying={setIsPaying} setPaymentMethod={setPaymentMethod} />
                </div>
            }
        </>
    );
}

export default Cart;

function EmptyCart() {
    return (
        <>
            <div className='flex flex-col space-y-8 text-center'>

                <p>Seu carrinho está vazio</p>
                <Link to={'/products'} className='button-primary'>Continuar comprando</Link>
            </div>
        </>
    )
}