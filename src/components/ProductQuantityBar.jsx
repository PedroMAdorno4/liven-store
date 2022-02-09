import { removeProduct, incrementQuantity, decrementQuantity } from '../redux/actions/cart';
import { MinusCircleIcon, PlusCircleIcon } from '@heroicons/react/solid'
import { useDispatch } from 'react-redux';

function ProductQuantityBar({ id, quantity, removeButton, className }) {
    const dispatch = useDispatch()

    return (
        <div className={`${className} flex flex-col items-center ${removeButton ? 'w-full sm:max-w-[8rem]' : 'w-full'}`}>
            <div className={`flex items-center ${removeButton ? 'w-full sm:max-w-[8rem]' : 'w-full'}`}>

                <button
                    className='button'
                    onClick={() => dispatch(decrementQuantity(id))} disabled={quantity <= 0}
                >
                    <MinusCircleIcon className='w-8 h-8 text-blue-700' />
                </button>

                <p className='w-full text-center text-xl'>{quantity}</p>

                <button onClick={() => dispatch(incrementQuantity(id))}>
                    <PlusCircleIcon className='w-8 h-8 text-blue-700' />
                </button>
            </div>

            {removeButton && <button className='button-danger mt-2 px-4 py-2 sm:p-0' onClick={() => dispatch(removeProduct(id))}>Remover</button>}
        </div >);
}

export default ProductQuantityBar;
