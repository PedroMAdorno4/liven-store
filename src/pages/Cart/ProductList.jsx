import ProductQuantityBar from '../../components/ProductQuantityBar';

function ProductList({ productList }) {
    return (
        <ul>
            {productList.map(item => <ProductListItem product={item} key={item.id} />)}
        </ul>
    )
}

export default ProductList;

function ProductListItem({ product }) {
    return (
        <li className='flex flex-col sm:flex-row items-center sm:h-24 rounded-md shadow-lg mb-4 px-4 py-2 border'>
            <div className='aspect-square max-h-full flex items-center'>

                <img src={product.image} alt='' className='max-h-full' />
            </div>
            <p className='pl-4 pr-8 w-full sm:w-2/3 my-4 sm:my-0 overflow-ellipsis h-8 overflow-hidden whitespace-nowrap text-xl sm:text-base '>{product.title}</p>
            <ProductQuantityBar id={product.id} quantity={product.quantity} removeButton={true} className='ml-auto mr-8' />
            <p className='price sm:w-28 text-2xl my-4 sm:my-0'>R$ {product.price.toFixed(2)}</p>
        </li>
    )
}