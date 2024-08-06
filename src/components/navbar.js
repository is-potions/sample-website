import React from "react";

export default function Navbar() {
    return (
        <nav class="navbar background">
				<ul class="nav-list">
					<div class="logo">
						<img src= "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"/>
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

				<div class="rightNav">
					<input
						type="text"
						name="search"
						id="search"
					/>
					<button class="btn btn-sm">
						Search
					</button>
				</div>
			</nav>
    );
}