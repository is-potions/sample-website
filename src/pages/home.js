import React from "react";
import "../App.css";
import Navbar from "../components/navbar";
import AboutUs from "../components/aboutus";
import ProductList from "../components/products/products";

export default function Home() {
    return (
		<>
			<Navbar />
			<AboutUs />
			<ProductList />
		</>
    )
}
