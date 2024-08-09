import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Description = () => {
    const { id } = useParams();
    const [data, setData] = useState(null);
    const [type, setType] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                let response, json;

                if (id) {
                    // Fetch character data
                    response = await fetch(`https://www.swapi.tech/api/people/${id}`);
                    json = await response.json();
                    if (json.message === "ok") {
                        setData(json.result);
                        setType("character");
                    } else {
                        // Fetch vehicle data
                        response = await fetch(`https://www.swapi.tech/api/vehicles/${id}`);
                        json = await response.json();
                        if (json.message === "ok") {
                            setData(json.result);
                            setType("vehicle");
                        } else {
                            // Fetch planet data
                            response = await fetch(`https://www.swapi.tech/api/planets/${id}`);
                            json = await response.json();
                            if (json.message === "ok") {
                                setData(json.result);
                                setType("planet");
                            }
                        }
                    }
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

    return (
        <div className="container">
            <div className="card">
                <img
                    src={type === "character" ? `https://starwars-visualguide.com/assets/img/characters/${id}.jpg` :
                        type === "vehicle" ? `https://starwars-visualguide.com/assets/img/vehicles/${id}.jpg` :
                            `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
                    className="card-img-top"
                    alt={data.properties.name}
                />
                <div className="card-body">
                    <h5 className="card-title">{data.properties.name}</h5>
                    <p className="card-text">{data.description}</p>
                </div>
            </div>
        </div>
    );
};
