import React from 'react';
import { useEffect, useState } from 'react';

import { getProducts } from '../../helpers/api';
import ProductCard from './ProductCard';

function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts().then(data => setProducts(data))
    }, []);

    return (
        <div className='grid grid-cols-4 gap-8'>
            {products.map(product => <ProductCard key={product.id} data={product} />)}
        </div>
    )
}
export default Products;

