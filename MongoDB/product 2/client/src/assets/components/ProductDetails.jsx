import React, {useState, useEffect} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";
import { Link } from "react-router-dom";



const ProductDetails = () => {
    const [Product, setProduct] = useState({});
    const {id} = useParams();
    
    useEffect(() => {
        axios.get(`http://localhost:8000/api/Product/${id}`)
        .then(response => {
            setProduct(response.data);
            })
            .catch(error => {
                console.error(error);
                });
                }, [id]);



                return (
                    <>
                    <div>
                    <h1>Prodact Details</h1>
                    <p>Product Name: {Product.title}</p>
                    <p>Product Price: {Product.price}</p>
                    <p>product Description: {Product.description}</p>
                    </div>
                    <Link to={"/"}>go back</Link>

                    </>
                    );
                    }
export default ProductDetails;

     



    

