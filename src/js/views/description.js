import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../../styles/description.css";

export const Description = () => {
    const { id } = useParams();
    const [data, setData] = useState(null);
    const [type, setType] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (id) {
                    let response, json;

                    // Fetch character
                    response = await fetch(`https://www.swapi.tech/api/people/${id}`);
                    json = await response.json();
                    if (json.result && json.message === "ok") {
                        setData(json.result);
                        setType("character");
                        return;
                    }

                    // Fetch vehicle
                    response = await fetch(`https://www.swapi.tech/api/vehicles/${id}`);
                    json = await response.json();
                    if (json.result && json.message === "ok") {
                        setData(json.result);
                        setType("vehicle");
                        return;
                    }

                    // Fetch planet
                    response = await fetch(`https://www.swapi.tech/api/planets/${id}`);
                    json = await response.json();
                    if (json.result && json.message === "ok") {
                        setData(json.result);
                        setType("planet");
                        return;
                    }

                    // If no data was found
                    setData(null);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!data) {
        return <div>Error loading data</div>;
    }

    const { properties } = data;

    return (
        <div className="container">
            <div className="card" id="card">
                <img
                    src={
                        type === "character" ? `https://starwars-visualguide.com/assets/img/characters/${id}.jpg` :
                        type === "vehicle" ? `https://starwars-visualguide.com/assets/img/vehicles/${id}.jpg` :
                        `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`
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
                            Name
                            <p>{properties.name}</p>
                        </h6>
                        <h6>
                            Climate
                            <p>{properties.climate}</p>
                        </h6>
                        <h6>
                            Population
                            <p>{properties.population}</p>
                        </h6>
                        <h6>
                            Orbital Period
                            <p>{properties.orbital_period}</p>
                        </h6>
                        <h6>
                            Rotation Period
                            <p>{properties.rotation_period}</p>
                        </h6>
                        <h6>
                            Diameter
                            <p>{properties.diameter}</p>
                        </h6>
                    </>
                )}
                {type === "vehicle" && (
                    <>
                        <h6>
                            Name
                            <p>{properties.name}</p>
                        </h6>
                        <h6>
                            Vehicle Class
                            <p>{properties.vehicle_class}</p>
                        </h6>
                        <h6>
                            Manufacturer
                            <p>{properties.manufacturer}</p>
                        </h6>
                        <h6>
                            Cost in Credits
                            <p>{properties.cost_in_credits}</p>
                        </h6>
                        <h6>
                            Length
                            <p>{properties.length}</p>
                        </h6>
                        <h6>
                            Crew
                            <p>{properties.crew}</p>
                        </h6>
                        <h6>
                            Passengers
                            <p>{properties.passengers}</p>
                        </h6>
                        <h6>
                            Max Atmosphering Speed
                            <p>{properties.max_atmosphering_speed}</p>
                        </h6>
                        <h6>
                            Cargo Capacity
                            <p>{properties.cargo_capacity}</p>
                        </h6>
                        <h6>
                            Consumables
                            <p>{properties.consumables}</p>
                        </h6>
                    </>
                )}
                {type === "character" && (
                    <>
                        <h6>
                            Name
                            <p>{properties.name}</p>
                        </h6>
                        <h6>
                            Height
                            <p>{properties.height}</p>
                        </h6>
                        <h6>
                            Mass
                            <p>{properties.mass}</p>
                        </h6>
                        <h6>
                            Hair Color
                            <p>{properties.hair_color}</p>
                        </h6>
                        <h6>
                            Skin Color
                            <p>{properties.skin_color}</p>
                        </h6>
                        <h6>
                            Eye Color
                            <p>{properties.eye_color}</p>
                        </h6>
                        <h6>
                            Birth Year
                            <p>{properties.birth_year}</p>
                        </h6>
                        <h6>
                            Gender
                            <p>{properties.gender}</p>
                        </h6>
                    </>
                )}
            </div>
        </div>
    );
};
