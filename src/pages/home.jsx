import React from "react";
import "../App.css";
import Navbar from "../components/navbar.jsx";
import AboutUs from "../components/aboutus.jsx";
import ProductList from "../components/products/products.jsx";
import Test from "../components/test.jsx";

export default function Home() {
    return (
		<>
			<Navbar />
			<ProductList />
			{/* <Test /> */}
		</>
    )
}
