import React from "react";
import {faker} from '@faker-js/faker';

faker.seed(6969);
const max=100;

let name = faker.food.dish();
let price = faker.number.int(max);

export default function ProductList(){
    return (
        <div className="product_container">
            <div className="product_wrapper">
                {/* <img> </img> */}
                <h1>{name}</h1>
                <h2>{price}</h2>
            </div>
        </div>
    );
}