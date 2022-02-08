import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { payments } from '../../helpers/constants';
import { getTotalPrice } from '../../helpers/pricing';
import PixQrCode from '../../assets/images/PixQrCode.png'
import BoletoBarCode from '../../assets/images/BoletoBarCode.png'
import { useDispatch } from 'react-redux';
import { clear } from '../../redux/actions/cart';

function FinishedOrder({ paymentMethod }) {
    const dispatch = useDispatch();

    const products = useSelector(state => state.cart.products)
    const [totalPrice] = useState(getTotalPrice(products));

    useEffect(() => {
        dispatch(clear())
    }, [])

    return (
        <div className='centered-page'>
            <div className='text-center'>
                <p className='text-center text-2xl mb-16'>Pedido <span>#{parseInt(Math.random() * 10000)} finalizado!</span></p>
                {paymentMethod.chosenPayment === payments.boleto && <Boleto />}
                {paymentMethod.chosenPayment === payments.pix && <Pix />}
                {paymentMethod.chosenPayment === payments.cartao && <Boleto />}
                <p className='mt-8 text-lg font-bold'>Valor total: R$ {totalPrice}</p>
            </div>
        </div>
    );
}

export default FinishedOrder;

function Boleto() {
    return (
        <div>
            <img src="https://img.icons8.com/fluency/48/000000/boleto-bankario.png" alt='' className='mx-auto' />
            <img src={BoletoBarCode} alt="" className='mt-4 w-[35rem]' />
            <p>34191.79001 01043.510047 91020.150008 8 88900026000</p>
        </div>
    )
}
function Pix() {
    return (
        <div>
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a2/Logo%E2%80%94pix_powered_by_Banco_Central_%28Brazil%2C_2020%29.svg" alt='' className='mx-auto max-w-[12rem]' />
            <img src={PixQrCode} alt="" className='mt-4 max-w-[20rem]' />
        </div>
    )
}
