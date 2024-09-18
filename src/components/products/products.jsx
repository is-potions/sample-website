// import React from "react";
import {faker} from '@faker-js/faker';
import React, { useState, useEffect } from "react";
import '../../App.css';

faker.seed(69);
const apiKey = import.meta.env.VITE_API_KEY;
let id = 0;

export default function ProductList(){
    const [res, setRes] = useState([]);
    const fetchRequest = async () => {
        const data = await fetch(
        `https://api.unsplash.com/search/photos?page=1&query=$food&client_id=${apiKey}`
        );
        const dataJ = await data.json();
        const result = dataJ.results;
        setRes(result);
    };
    useEffect(() => {
        fetchRequest();
    }, []);

    return (
        <div className="products_wrapper">
            <div className="products_container">
                    {res.map((result) => {
                    id++;
                    return (
                    <>
                        <div className='food_list_wrapper' key={id}>
                            <div className="food_image">
                                <img
                                src={result.urls.raw + '&w=300&h=300&fit=crop'}
                                alt="val.alt_description"
                                />
                            </div>
                            <div className="food_image_desc">
                                <h1>{faker.food.dish()}</h1>
                                <h2>{'Php ' + faker.number.int(100)}</h2>
                            </div>
                        </div>
                    </>
                    );
                })}
            </div>
        </div>
    );
}