import { Field, Form, Formik } from 'formik';
import { useSelector } from 'react-redux';
import * as Constants from '../../helpers/constants'
import { GetTotalPrice } from '../../helpers/pricing';

function Checkout() {
    const products = useSelector(state => state.cart.products)

    return (
        <div className='w-full'>
            <hr className='mt-8 mb-4' />
            <div className='flex'>
                <div>
                    <ChoosePayment />
                </div>
                <div className='ml-auto text-center mr-12 whitespace-nowrap'>
                    <p>Total:</p>
                    <p className='price'>R$ {GetTotalPrice(products)}</p>
                </div>
            </div>
        </div>
    );
}

export default Checkout;

function ChoosePayment() {


    return (
        <Formik
            initialValues={{ chosenPayment: '' }}
            onSubmit={values => console.log(values)}
        >
            {({ values }) => (
                <Form>
                    <p>Escolha um metodo de pagamento:</p>
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