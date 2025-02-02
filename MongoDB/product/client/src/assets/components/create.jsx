import React, { useState } from "react";
import axios from "axios";


const Create = ({ Products, setProducts }) => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
  
        axios
            .post("http://localhost:8000/api/Product", { title, price, description })
            .then((res) => {
                console.log("Product added:", res.data);
                setProducts([...Products, res.data]); 
                setTitle("");
                setPrice("");
                setDescription("");
            })
            .catch((err) => console.error("Error posting data:", err));
    };

    return (
        <>
            <h3>Product Manager</h3>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Title"
                    value={title}  
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <br />
                <input
                    type="number"
                    placeholder="0"
                    value={price}  
                    onChange={(e) => setPrice(e.target.value)}
                    required
                />
                <br />
                <input
                type="text"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                />
                <br />
                <button type="submit">Create</button>
            </form>

            <ul>
              {Products.map((Product) => (
                  <li key={Product._id}>
                      {Product.title} {Product.price} {Product.description} 
                  </li>
              ))}
          </ul>
            
        </>
    );
};

export default Create;