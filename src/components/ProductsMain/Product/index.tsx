import { Prod } from "../../Types/types";
import "./styles.css";

export type AppProps = {
    product: Prod
}

export default function Product({product}: AppProps): JSX.Element {
    return (
        <section className="product">
            <img src={product.image} alt={product.title}/>
            <h4>{product.title}</h4>
            <p>$ {product.price}</p>
            <button>Add to cart</button>
        </section>
    )
}