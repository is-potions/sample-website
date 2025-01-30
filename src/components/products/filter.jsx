import { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import ProductList from "./productsList";


export default function Filter({arr}){

    const [filterTerm, setFilterTerm] = useState('');
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(arr);
    }, [arr]);

    const filteredData = data.filter(item => {
        const type = item.type.toLowerCase();
        return type.includes(filterTerm);
    });

    // const handleSearch = (e) => {
    //     setSearchTerm(e.target.value);
    // }

    Filter.propTypes = {
        arr: PropTypes.array.isRequired
    }

    return(
        <>
        <div className="filter_container">
            <div className="filter_wrapper">
                {/* <input type="text" value={searchTerm} onChange={handleSearch} placeholder="Search By Name" /> */}
                <div className="filter_list">
                    <button className="filter" name="all"  onClick={() => setFilterTerm('')}>All</button>
                    <button className="filter" name="beef" onClick={() => setFilterTerm('beef')}>Beef</button>
                    <button className="filter" name="pork" onClick={() => setFilterTerm('pork')}>Pork</button>
                    <button className="filter" name="seafood" onClick={() => setFilterTerm('seafood')}>Seafood</button>
                    <button className="filter" name="chicken" onClick={() => setFilterTerm('chicken')}>Chicken</button>
                    <button className="filter" name="vegetables" onClick={() => setFilterTerm('vegetables')}>Vegetables</button>
                    <button className="filter" name="pasta" onClick={() => setFilterTerm('pasta')}>Pasta</button>
                </div>
                {/* {filteredData.map(item => <li key={item.id}>{item.name}</li>)} */}
            </div>
        </div>
        <ProductList data={filteredData}/>
        </>
    );


}