import React from 'react';
import { useEffect, useState } from 'react';
import Loader from '../../components/Loader';
import ProductCard from './ProductCard';

function Products() {
    const [products, setProducts] = useState([]);
    const [hasLoaded, setHasLoaded] = useState(false);

    useEffect(() => {
        let isCancelled = false;

        //API returns at max 30 products
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => !isCancelled ? (setProducts(data), setHasLoaded(true)) : null)
            .catch(error => {
                if (!isCancelled)
                    console.log(error);
            })

        return () => isCancelled = true

    }, []);

    return (
        <>
            {hasLoaded ?
                <div className='product-grid'>
                    {products.map(product => <ProductCard key={product.id} data={product} />)}
                </div> :
                <Loader />
            }
        </>

    )
}
export default Products;

