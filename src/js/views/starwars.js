import React, { useContext, useState, useEffect } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";

export const StarWars = () => {
	const { store, actions } = useContext(Context);
	const [characters, setCharacters] = useState([]);
	const [characterDetails, setCharacterDetails] = useState([]);
	const [vehicleDetails, setVehicleDetails] = useState([]);
	const [planets, setPlanets] = useState([]);
	const [planetDetails, setPlanetDetails] = useState([]);

	const characterImageUrls = {
		"1": "https://starwars-visualguide.com/assets/img/characters/1.jpg",
		"2": "https://starwars-visualguide.com/assets/img/characters/2.jpg",
		"3": "https://starwars-visualguide.com/assets/img/characters/3.jpg",
		"4": "https://starwars-visualguide.com/assets/img/characters/4.jpg",
		"5": "https://starwars-visualguide.com/assets/img/characters/5.jpg",
		"6": "https://starwars-visualguide.com/assets/img/characters/6.jpg",
		"7": "https://starwars-visualguide.com/assets/img/characters/7.jpg",
		"8": "https://starwars-visualguide.com/assets/img/characters/8.jpg",
		"9": "https://starwars-visualguide.com/assets/img/characters/9.jpg",
		"10": "https://starwars-visualguide.com/assets/img/characters/10.jpg"
	};

	const vehicleImageUrls = {
		"4": "https://starwars-visualguide.com/assets/img/vehicles/4.jpg",
		"7": "https://starwars-visualguide.com/assets/img/vehicles/7.jpg",
		"6": "https://starwars-visualguide.com/assets/img/vehicles/6.jpg",
		"8": "https://starwars-visualguide.com/assets/img/vehicles/8.jpg",
		"14": "https://starwars-visualguide.com/assets/img/vehicles/14.jpg",
		"18": "https://starwars-visualguide.com/assets/img/vehicles/18.jpg",
		"16": "https://starwars-visualguide.com/assets/img/vehicles/16.jpg",
		"19": "https://starwars-visualguide.com/assets/img/vehicles/19.jpg",
		"20": "https://starwars-visualguide.com/assets/img/vehicles/20.jpg",
		"24": "https://starwars-visualguide.com/assets/img/vehicles/24.jpg"
	};

	const planetImageUrls = {
		"1": "https://starwars-visualguide.com/assets/img/planets/1.jpg",
		"2": "https://starwars-visualguide.com/assets/img/planets/2.jpg",
		"3": "https://starwars-visualguide.com/assets/img/planets/3.jpg",
		"4": "https://starwars-visualguide.com/assets/img/planets/4.jpg",
		"5": "https://starwars-visualguide.com/assets/img/planets/5.jpg",
		"6": "https://starwars-visualguide.com/assets/img/planets/6.jpg",
		"7": "https://starwars-visualguide.com/assets/img/planets/7.jpg",
		"8": "https://starwars-visualguide.com/assets/img/planets/8.jpg",
		"9": "https://starwars-visualguide.com/assets/img/planets/9.jpg",
		"10": "https://starwars-visualguide.com/assets/img/planets/10.jpg"
	};

	useEffect(() => {
		// Fetch characters
		fetch("https://www.swapi.tech/api/people/")
			.then(response => response.json())
			.then(data => {
				setCharacters(data.results);
				return data.results;
			})
			.then(results => {
				return Promise.all(
					results.map(character =>
						fetch(`https://www.swapi.tech/api/people/${character.uid}`)
							.then(response => response.json())
							.then(details => ({
								uid: character.uid,
								name: character.name,
								gender: details.result.properties.gender,
								hair_color: details.result.properties.hair_color,
								eye_color: details.result.properties.eye_color,
							}))
					)
				);
			})
			.then(detailsArray => {
				setCharacterDetails(detailsArray);
			})
			.catch(error => console.log(error));

		// Fetch vehicles
		fetch("https://www.swapi.tech/api/vehicles/")
			.then(response => response.json())
			.then(data => {
				return data.results;
			})
			.then(results => {
				return Promise.all(
					results.map(vehicle =>
						fetch(`https://www.swapi.tech/api/vehicles/${vehicle.uid}`)
							.then(response => response.json())
							.then(details => ({
								uid: vehicle.uid,
								name: vehicle.name,
								model: details.result.properties.model,
								manufacturer: details.result.properties.manufacturer,
							}))
					)
				);
			})
			.then(detailsArray => {
				setVehicleDetails(detailsArray);
			})
			.catch(error => console.log(error));

		// Fetch planets
		fetch("https://www.swapi.tech/api/planets")
			.then(response => response.json())
			.then(data => {
				return data.results;
			})
			.then(results => {
				return Promise.all(
					results.map(planet =>
						fetch(`https://www.swapi.tech/api/planets/${planet.uid}`)
							.then(response => response.json())
							.then(details => ({
								uid: planet.uid,
								name: planet.name,
								terrain: details.result.properties.terrain,
								population: details.result.properties.population,
							}))
					)
				);
			})
			.then(detailsArray => {
				setPlanetDetails(detailsArray);
			})
			.catch(error => console.log(error));
	}, []);

	return (
		<div className="text-center" id="divprincipal">
			<h2>Characters</h2>
			<div id="cards-container">
				{characterDetails.map(character => (
					<div key={character.uid} className="card me-3">
						<img
							src={characterImageUrls[character.uid] || "https://example.com/images/default.jpg"}
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
							<button className="btn btn-warning" id="heart">♥</button>
						</div>
					</div>
				))}
			</div> 
			
			<h2 id="vehicles">Vehicles</h2>
			<div id="cards-container">
				{vehicleDetails.map(vehicle => (
					<div key={vehicle.uid} className="card me-3">
						<img
							src={vehicleImageUrls[vehicle.uid] || "https://example.com/images/default.jpg"}
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
							<button className="btn btn-warning" id="cardbuttonvehicle2">♥</button>
						</div>
					</div>
				))}
			</div>
			
			<h2 id="planets">Planets</h2>
			<div id="cards-container">
				{planetDetails.map(planet => (
					<div key={planet.uid} className="card me-3">
						<img
							src={planetImageUrls[planet.uid] || "https://example.com/images/default.jpg"}
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
							<button className="btn btn-warning" id="cardbuttonplanet2">♥</button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};
