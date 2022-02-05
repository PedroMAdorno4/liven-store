import { useDispatch, useSelector } from 'react-redux';
import { addProduct, removeProduct, incrementQuantity, decrementQuantity } from '../../redux/actions/cart';
import { MinusCircleIcon, PlusCircleIcon } from '@heroicons/react/solid'

function ProductCard({ data = { id: 0, image: 'http://placekitten.com/301/200', title: 'Title', price: 100 } }) {
    const dispatch = useDispatch()
    const cartProducts = useSelector(state => state.cart.products)

    const product = cartProducts.find(product => product.id === data.id)

    return (
        <div className='rounded-md shadow-lg p-4'>
            <div className='aspect-square rounded-t-md overflow-hidden flex items-center justify-center'>
                <img src={data.image} alt='' className='max-h-full' />
            </div>
            <p className='line-clamp-2 min-h-[3rem] text-base mt-2 mb-4'>{data.title}</p>
            <p className='mb-4 font-bold text-indigo-700'>R$ {data.price}</p>

            {product ?
                <div className='flex items-center'>
                    <button
                        className='button'
                        onClick={() => dispatch(decrementQuantity(data.id))} disabled={product.quantity <= 0}
                    >
                        <MinusCircleIcon className='w-8 h-8 text-blue-700' />
                    </button>

                    <p className='w-full text-center'>{product.quantity}</p>

                    <button onClick={() => dispatch(incrementQuantity(data.id))}>
                        <PlusCircleIcon className='w-8 h-8 text-blue-700' />
                    </button>

                    {/* <button onClick={() => dispatch(removeProduct(data.id))}>Remover</button> */}
                </div> :
                <button className='button-primary w-full' onClick={() => dispatch(addProduct(data.id))}>Adicionar</button>}


        </div>
    )
}

export default ProductCard;
