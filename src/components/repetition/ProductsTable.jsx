import './ProductsTable.css'
import React from "react";
import products from "../../data/products";

export default (props) => {
    function getLines() {
        return products.map((product, i) => {
            return(
                <tr key={product.id} className={i % 2 === 0 ? 'Par' : ''}>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>R$ {product.price}</td>
                </tr>
            )
        })
    }  
    return (
        <div className="ProductsTable">
            <table border='1'>
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
                </thead>
                <tbody>
                    {getLines()}
                </tbody>
            </table>
        </div>
    )
};