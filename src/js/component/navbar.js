import React, { useContext } from "react";
import { Link } from "react-router-dom";
import starwarsfoto from "../store/img/StarWars.png";
import "../../styles/index.css";
import { Context } from "../store/appContext";

export const Navbar = () => {
    const { store, actions } = useContext(Context);

    const favorites = Array.isArray(store.favorites) ? store.favorites : [];

    const handleRemoveFavorite = (itemName) => {
        actions.removeFavorite(itemName);
    };

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
                <ul className="dropdown-menu" id="dropdown-menu">
                    {favorites.length > 0 ? (
                        favorites.map((name, index) => (
                            <li key={index} className="d-flex justify-content-between align-items-center">
                                <a className="dropdown-item" href="#" id="listFavorites">{name}</a>
                                <button className="btn btn-light" onClick={() => handleRemoveFavorite(name)}>🗑️</button>
                            </li>
                        ))
                    ) : (
                        <li><a className="dropdown-item" href="#">Not favorites</a></li>
                    )}
                </ul>
            </div>
        </nav>
    );
};
