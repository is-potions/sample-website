import "../App.css";
import Description from "../components/hero/description.jsx";
import HeroElement from "../components/hero/heroElement.jsx";
import Navbar from "../components/navbar.jsx";
import Filter from "../components/products/filter.jsx";

export default function Home() {
	// categories = [Beef, Chicken, Pork, Seafood, Vegetables, Pasta]
	const foodItems = [
		{ id: 1, name: 'Baked Salmon', type: 'Seafood', img: '/images/salmon.png'},
		{ id: 2, name: 'Pork Sisig', type: 'Pork', img: '/images/sisig.png' },
		{ id: 3, name: 'Beef Caldereta', type: 'Beef', img: '/images/caldereta.png' },
		{ id: 5, name: 'Spaghetti Bolognese', type: 'Pasta', img: '/images/bolognese.png' },
		{ id: 4, name: 'Chicken Galantina', type: 'Chicken', img: '/images/galantina.png' },
		{ id: 6, name: 'Hickory Pork Ribs', type: 'Pork', img: '/images/ribs.png' },
		{ id: 7, name: 'Fish Sticks', type: 'Seafood', img: '/images/fish sticks.png' },
		{ id: 8, name: 'Fresh Lumpia', type: 'Vegetables', img: '/images/Lumpiang-Ubod.png' },
		{ id: 9, name: 'Laing', type: 'Vegetables', img: '/images/laing.png' },
	];
    return (
		<>
			<Navbar />
			<HeroElement />
			<Description />
			<Filter arr={foodItems} />
		</>
    )
}
