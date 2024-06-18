import { useEffect, useState } from 'react';
import "./styles.css";
import axios from 'axios';
import { Prod } from '../Types/types';
import Product from './Product';

const ProductMain = () => {
  
  const [products, SetProducts] = useState<Prod[] | null>(null); 
  useEffect(() => {
    const url = 'https://fakestoreapi.com/products';
    axios.get(url).then((response) => {
      SetProducts(response.data);
    })
  }, []);

    return (
      
        <>
        <article className="title">
            <h1>Products</h1>
        </article>
        <article className="products-container">
                {
                    products ?
                    products.map((product) => {
                        const { title, price, description, category, image, id } = product;
                        return <Product key={product.id} product={product}/>;
                    })
                    : null
                }
        </article>
        </>

    );
}

export default ProductMain;