import React, { useContext } from "react";
import { Link } from "react-router-dom";
import starwarsfoto from "../store/img/StarWars.png";
import "../../styles/index.css";
import { Context } from "../store/appContext";

export const Navbar = () => {
    const { store } = useContext(Context);

    const favorites = Array.isArray(store.favorites) ? store.favorites : [];

    return (
        <nav className="navbar mb-3">
            <div>
                <Link to="/">
                    <span className="navbar-brand mb-0 h1">
                        <img src={starwarsfoto} alt="Star Wars" />
                    </span>
                </Link>
            </div>
            <div className="btn-group" role="group" id="divnavbar">
                <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    Favorites
                </button>
                <ul className="dropdown-menu">
                    {favorites.length > 0 ? (
                        favorites.map((name, index) => (
                            <li key={index}>
                                <a className="dropdown-item" href="#">{name}</a>
                            </li>
                        ))
                    ) : (
                        <li><a className="dropdown-item" href="#">No hay favoritos aún</a></li>
                    )}
                </ul>
            </div>
        </nav>
    );
};
