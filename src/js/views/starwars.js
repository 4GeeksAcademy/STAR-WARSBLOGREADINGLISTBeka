import React, { useContext, useEffect } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";

export const StarWars = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.getCharacters();
        actions.getVehicles();
        actions.getPlanets();
    }, [actions]);

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
                            src={store.characterImageUrls[character.uid] || "https://example.com/images/default.jpg"}
                            className="card-img-top"
                            alt={`${character.name}`}
                            id="cardimg"
                        />
                        <div className="card-body" id="cardcontenido">
                            <h5>{character.name}</h5>
                            <p>Gender: {character.gender}</p>
                            <p>Hair Color: {character.hair_color}</p>
                            <p>Eye Color: {character.eye_color}</p>
                        </div>
                        <div id="cardbutton">
                            <button className="btn btn-danger">Learn More</button>
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
                            src={store.vehicleImageUrls[vehicle.uid] || "https://example.com/images/default.jpg"}
                            className="card-img-top"
                            alt={`${vehicle.name}`}
                            id="cardimg"
                        />
                        <div className="card-body" id="cardcontenidovehicle">
                            <h5>{vehicle.name}</h5>
                            <p>Model: {vehicle.model}</p>
                            <p>Manufacturer: {vehicle.manufacturer}</p>
                        </div>
                        <div>
                            <button className="btn btn-danger" id="cardbuttonvehicle">Learn More</button>
                            <button className="btn btn-warning" id="cardbuttonvehicle2" onClick={() => handleAddFavorite(vehicle.name)}>♥</button>
                        </div>
                    </div>
                ))}
            </div>

            <h2 id="planets">Planets</h2>
            <div id="cards-container">
                {store.planetDetails.map(planet => (
                    <div key={planet.uid} className="card me-3">
                        <img
                            src={store.planetImageUrls[planet.uid] || "https://example.com/images/default.jpg"}
                            className="card-img-top"
                            alt={`${planet.name}`}
                            id="cardimg"
                        />
                        <div className="card-body" id="cardcontenidoplanet">
                            <h5>{planet.name}</h5>
                            <p>Terrain: {planet.terrain}</p>
                            <p>Population: {planet.population}</p>
                        </div>
                        <div>
                            <button className="btn btn-danger" id="cardbuttonplanet">Learn More</button>
                            <button className="btn btn-warning" id="cardbuttonplanet2" onClick={() => handleAddFavorite(planet.name)}>♥</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};