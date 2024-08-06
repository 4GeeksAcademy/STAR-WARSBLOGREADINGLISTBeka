import React from "react";
import { Link } from "react-router-dom";
import starwarsfoto from "../../img/StarWars.png";
import "../../styles/index.css"

export const Navbar = () => {
	return (
		<nav className="navbar mb-3">
			<div >
				<Link to="/">
					<span className="navbar-brand mb-0 h1 ">
						<img src={starwarsfoto} />
					</span>
				</Link>
			</div>
			<div class="btn-group" role="group" id="divnavbar">
				<button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
					Favorites
				</button>
				<ul class="dropdown-menu">
					<li><a class="dropdown-item" href="#">Dropdown link</a></li>
					<li><a class="dropdown-item" href="#">Dropdown link</a></li>
				</ul>
			</div>
		</nav>
	);
};
