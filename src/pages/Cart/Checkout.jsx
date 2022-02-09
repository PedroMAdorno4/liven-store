import { Field, Form, Formik } from 'formik';
import { useSelector } from 'react-redux';
import * as Constants from '../../helpers/constants'
import { getTotalPrice } from '../../helpers/pricing';

function Checkout({ setIsPaying, setPaymentMethod }) {
    const products = useSelector(state => state.cart.products)


    return (
        <>
            <div className='w-full'>
                <hr className='mt-8 mb-4' />
                <div className='flex'>
                    <div>
                        <ChoosePayment setIsPaying={setIsPaying} setPaymentMethod={setPaymentMethod} />
                    </div>
                    <div className='ml-auto text-center mr-12 whitespace-nowrap'>
                        <p>Total:</p>
                        <p className='price'>R$ {getTotalPrice(products)}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Checkout;

function ChoosePayment({ setIsPaying, setPaymentMethod }) {
    function submit(value) {
        setPaymentMethod(value);
        setIsPaying(true);
    }

    return (
        <Formik
            initialValues={{ chosenPayment: '' }}
            onSubmit={value => submit(value)}
        >
            {({ values }) => (
                <Form>
                    <p>Escolha um método de pagamento:</p>
                    <div className='flex flex-col space-y-4 mt-4'>
                        {Constants.paymentMethods.map(method => <PaymentMethod data={method} key={method.name} />)}
                    </div>
                    <button type='submit' className='button-primary mt-8 w-full'>Finalizar compra</button>
                </Form>
            )}

        </Formik>
    );
}

function PaymentMethod({ data }) {
    return (
        <label className='rounded-md border border-blue-500 py-4 px-4 text-left hover:cursor-pointer'>
            <Field type="radio" name="chosenPayment" value={data.value} />
            <span className='ml-4'>{data.name}</span>
        </label>
    )
}