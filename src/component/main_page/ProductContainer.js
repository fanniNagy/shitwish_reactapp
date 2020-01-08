import React, {useEffect, useState} from "react";
import Product from "./Product";

function ProductContainer() {
    const url = "http://localhost:8762/product";
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            const response = await fetch(url, {
                method: "GET"
            });
            if (response.status > 399) {
                setError(true);
                setLoading(false);
            } else {
                const data = await response.json();
                setProducts(data);
                setError(false);
                setLoading(false);
            }
        }

        fetchData();
    }, []);

    if (error) {
        return (<div>
            error :(
        </div>)
    } else if (loading) {
        return (
            <div>
                loading..
            </div>)
    } else {
        return (
            <div>
                {products.map(product => <Product product={product} key={"product" + product.id}/>)}
            </div>
        )
    }


}

export default ProductContainer;