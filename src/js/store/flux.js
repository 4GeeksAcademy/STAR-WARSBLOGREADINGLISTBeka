const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			characterDetails: [],
			vehicles: [],
			vehicleDetails: [],
			planets: [],
			planetDetails: [],
			characterImageUrls: {
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
			},
			vehicleImageUrls: {
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
			},
			planetImageUrls: {
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
			}
		},
		actions: {
			getCharacters: () => {
				fetch("https://www.swapi.tech/api/people/")
					.then(response => response.json())
					.then(data => {
						const characters = data.results;
						setStore({ characters });
						return characters;
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
										eye_color: details.result.properties.eye_color
									}))
							)
						);
					})
					.then(detailsArray => {
						setStore({ characterDetails: detailsArray });
					})
					.catch(error => console.log("Error fetching characters:", error));
			},

			getVehicles: () => {
				fetch("https://www.swapi.tech/api/vehicles/")
					.then(response => response.json())
					.then(data => {
						const vehicles = data.results;
						setStore({ vehicles });
						return vehicles;
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
										manufacturer: details.result.properties.manufacturer
									}))
							)
						);
					})
					.then(detailsArray => {
						setStore({ vehicleDetails: detailsArray });
					})
					.catch(error => console.log("Error fetching vehicles:", error));
			},

			getPlanets: () => {
				fetch("https://www.swapi.tech/api/planets/")
					.then(response => response.json())
					.then(data => {
						const planets = data.results;
						setStore({ planets });
						return planets;
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
										population: details.result.properties.population
									}))
							)
						);
					})
					.then(detailsArray => {
						setStore({ planetDetails: detailsArray });
					})
					.catch(error => console.log("Error fetching planets:", error));
			},

			addFavorites: () => {
				alert("¡Hola!");
			}
		}
	};
};

export default getState;