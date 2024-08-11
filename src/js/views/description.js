import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../../styles/description.css";

export const Description = () => {
    const { id, type } = useParams();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                let response;

                if (type === "character") {
                    response = await fetch(`https://www.swapi.tech/api/people/${id}`);
                } else if (type === "vehicle") {
                    response = await fetch(`https://www.swapi.tech/api/vehicles/${id}`);
                } else if (type === "planet") {
                    response = await fetch(`https://www.swapi.tech/api/planets/${id}`);
                }

                const json = await response.json();

                if (json.result && json.message === "ok") {
                    setData(json.result);
                } else {
                    setData(null);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
                setData(null);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [id, type]);

    if (loading) {
        return <div className="Loading">
            <div><p id="loading">Loading</p></div>
            <div class="loader">
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
            </div>
        </div>;
    }

    if (!data) {
        return <div id="loading">Error loading data</div>;
    }

    const { properties } = data;

    return (
        <div className="container">
            <div className="card" id="card">
                <img
                    src={
                        type === "character"
                            ? `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`
                            : type === "vehicle"
                                ? `https://starwars-visualguide.com/assets/img/vehicles/${id}.jpg`
                                : `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`
                    }
                    className="card-img-top"
                    alt={properties?.name || "No Image"}
                    id="img"
                />
                <div className="card-body" id="contenido">
                    <h2 className="card-title">{properties?.name || "No Name"}</h2>
                    <p className="card-text" id="title">{data.description || "No description available"}</p>
                </div>
            </div>
            <div className="details">
                {type === "planet" && (
                    <>
                        <h6>
                            Nombre
                            <p>{properties.name}</p>
                        </h6>
                        <h6>
                            Clima
                            <p>{properties.climate}</p>
                        </h6>
                        <h6>
                            Población
                            <p>{properties.population}</p>
                        </h6>
                        <h6>
                            Período Orbital
                            <p>{properties.orbital_period}</p>
                        </h6>
                        <h6>
                            Período de Rotación
                            <p>{properties.rotation_period}</p>
                        </h6>
                        <h6>
                            Diámetro
                            <p>{properties.diameter}</p>
                        </h6>
                    </>
                )}
                {type === "vehicle" && (
                    <>
                        <h6>
                            Nombre
                            <p>{properties.name}</p>
                        </h6>
                        <h6>
                            Clase de Vehículo
                            <p>{properties.vehicle_class}</p>
                        </h6>
                        <h6>
                            Fabricante
                            <p>{properties.manufacturer}</p>
                        </h6>
                        <h6>
                            Costo en Créditos
                            <p>{properties.cost_in_credits}</p>
                        </h6>
                        <h6>
                            Longitud
                            <p>{properties.length}</p>
                        </h6>
                        <h6>
                            Tripulación
                            <p>{properties.crew}</p>
                        </h6>
                        <h6>
                            Pasajeros
                            <p>{properties.passengers}</p>
                        </h6>
                        <h6>
                            Velocidad Máxima Atmosférica
                            <p>{properties.max_atmosphering_speed}</p>
                        </h6>
                        <h6>
                            Capacidad de Carga
                            <p>{properties.cargo_capacity}</p>
                        </h6>
                        <h6>
                            Consumibles
                            <p>{properties.consumables}</p>
                        </h6>
                    </>
                )}
                {type === "character" && (
                    <>
                        <h6>
                            Nombre
                            <p>{properties.name}</p>
                        </h6>
                        <h6>
                            Altura
                            <p>{properties.height}</p>
                        </h6>
                        <h6>
                            Peso
                            <p>{properties.mass}</p>
                        </h6>
                        <h6>
                            Color de Cabello
                            <p>{properties.hair_color}</p>
                        </h6>
                        <h6>
                            Color de Piel
                            <p>{properties.skin_color}</p>
                        </h6>
                        <h6>
                            Color de Ojos
                            <p>{properties.eye_color}</p>
                        </h6>
                        <h6>
                            Año de Nacimiento
                            <p>{properties.birth_year}</p>
                        </h6>
                        <h6>
                            Género
                            <p>{properties.gender}</p>
                        </h6>
                    </>
                )}
            </div>
        </div>
    );
};
