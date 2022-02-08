import { useDispatch, useSelector } from 'react-redux';
import ProductQuantityBar from '../../components/ProductQuantityBar';
import { addProduct } from '../../redux/actions/cart';


function ProductCard({ data = { id: 0, image: 'http://placekitten.com/301/200', title: 'Title', price: 100 } }) {
    const dispatch = useDispatch()
    const cartProducts = useSelector(state => state.cart.products)

    const product = cartProducts.find(product => product.id === data.id)

    return (
        <div className='rounded-md shadow-lg border p-4'>
            <div className='aspect-square rounded-t-md overflow-hidden flex items-center justify-center'>
                <img src={data.image} alt='' className='max-h-full' />
            </div>
            <p className='line-clamp-2 min-h-[3rem] text-base mt-2 mb-4'>{data.title}</p>
            <p className='price mb-4'>R$ {data.price}</p>

            {product ?
                <ProductQuantityBar id={data.id} quantity={product.quantity} />
                :
                <button className='button-primary w-full' onClick={() => dispatch(addProduct(data))}>Adicionar</button>}


        </div>
    )
}

export default ProductCard;
