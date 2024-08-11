import React, { useContext, useEffect } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const StarWars = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.getCharacters();
        actions.getVehicles();
        actions.getPlanets();
    }, []);

    const handleAddFavorite = (itemName) => {
        actions.addFavorites(itemName);
    };

    return (
        <div className="text-center" id="divprincipal">
            <h2>Characters</h2>
            <div id="cards-container">
                {store.characterDetails.map(character => (
                    <div key={character.uid} className="card me-3">
                        <img
                            src={store.characterImageUrls[character.uid]}
                            className="card-img-top"
                            alt={character.name}
                            id="cardimg"
                        />
                        <div className="card-body" id="cardcontenido">
                            <h5>{character.name}</h5>
                        </div>
                        <div id="cardbutton">
                            <Link to={`/description/${character.uid}/character`}>
                                <button className="btn btn-danger">Learn More</button>
                            </Link>
                            <button
                                className="btn btn-warning"
                                id="heart"
                                onClick={() => handleAddFavorite(character.name)}
                            >
                                ♥
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <h2 id="vehicles">Vehicles</h2>
            <div id="cards-container">
                {store.vehicleDetails.map(vehicle => (
                    <div key={vehicle.uid} className="card me-3">
                        <img
                            src={store.vehicleImageUrls[vehicle.uid]}
                            className="card-img-top"
                            alt={vehicle.name}
                            id="cardimg"
                        />
                        <div className="card-body" id="cardcontenidovehicle">
                            <h5>{vehicle.name}</h5>
                        </div>
                        <div id="cardbutton">
                            <Link to={`/description/${vehicle.uid}/vehicle`}>
                                <button className="btn btn-danger">Learn More</button>
                            </Link>
                            <button
                                className="btn btn-warning"
                                id="cardbuttonvehicle2"
                                onClick={() => handleAddFavorite(vehicle.name)}
                            >
                                ♥
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <h2 id="planets">Planets</h2>
            <div id="cards-container">
                {store.planetDetails.map(planet => (
                    <div key={planet.uid} className="card me-3">
                        <img
                            src={store.planetImageUrls[planet.uid]}
                            className="card-img-top"
                            alt={planet.name}
                            id="cardimg"
                        />
                        <div className="card-body" id="cardcontenidoplanet">
                            <h5>{planet.name}</h5>
                        </div>
                        <div id="cardbutton">
                            <Link to={`/description/${planet.uid}/planet`}>
                                <button className="btn btn-danger">Learn More</button>
                            </Link>
                            <button
                                className="btn btn-warning"
                                id="cardbuttonplanet2"
                                onClick={() => handleAddFavorite(planet.name)}
                            >
                                ♥
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
