import { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import {faker} from '@faker-js/faker';

export default function ProductList({data}) {
    const [prod,setProd] = useState([]);

    useEffect(() => {
        setProd(data);
    },[data])

    return (
        <div className="products_wrapper">
            <div className="products_container">
            {prod.map((item) => {
                return (
                    <div key={item.id} className='food_container'>
                        <div className="food_image">
                            <img
                                src={item.img}
                                alt={item.name}
                            />
                        </div>
                        <div className="food_desc">
                            <h1>{item.name}</h1>
                            <h2>{'PHP ' + faker.number.float({ fractionDigits: 2 , max: 100})}</h2>
                        </div>
                    </div>
                )
            })}
            </div>
        </div>
    );
}

ProductList.propTypes = {
    data: PropTypes.array.isRequired,
};