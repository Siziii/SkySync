const API_KEY = import.meta.env.VITE_APP_GEO_API_KEY;

export const geoApiOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': API_KEY,
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
	}
};

export const GEO_API_URL ='https://wft-geo-db.p.rapidapi.com/v1/geo';