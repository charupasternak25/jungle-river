import { useState, useEffect } from "react";

export default function useProducts() {
    const [products, setProduct] = useState([]);
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((response) => response.json())
            .then((data) => {
                setProduct(data);
                console.log(data)
            })
    }, []);
    return products; 
}
