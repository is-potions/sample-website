import React from "react";
import { useState, useEffect } from "react";

const apiKey = import.meta.env.VITE_API_KEY;

export default function Navbar() {
    // const [res, setRes] = useState([]);
    // const fetchRequest = async () => {
    //     const data = await fetch(
    //     `https://api.unsplash.com/photos/2M6ewSjbo60?client_id=${apiKey}`
    //     );
    //     const result = await data.json();
    //     // const result = dataJ.results;
    //     setRes(result);
	// 	console.log(result)
    // };
    // useEffect(() => {
    //     fetchRequest();
    // }, []);


    return (
		<>
			<nav className="navbar background">
				<ul className="nav-list">
					<div className="logo">
						{/* <img src={result.urls.small}/> */}
					</div>
					<li>
						<a href="#menu">Menu</a>
					</li>
					<li>
						<a href="#videos">Videos</a>
					</li>
					<li>
						<a href="#cart">Cart</a>
					</li>
					<li>
						<a href="#about-us">About Us</a>
					</li>
				</ul>

				<div className="rightNav">
					<input
						type="text"
						name="search"
						id="search"
					/>
					<button className="btn btn-sm">
						Search
					</button>
				</div>
			</nav>
		</>
    );
}