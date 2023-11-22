import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_API_URL, geoApiOptions } from "../../utils/getCityData";
import { useCityContext } from "../../CityContext";
import { customStyles } from "../../styles/searchStyle";

const CitiesSearch = () => {
    const [search, setSearch] = useState(null);
    const { cities, addCity } = useCityContext();

    const handleOnChange = (searchData) => {
        setSearch(searchData);
        if (!cities.some(city => city.id === searchData.id) && cities.length<5) {
            addCity(searchData);
            setSearch(null);
        } else {
            console.log("City name is empty or already exists.");
        }
    }

    const loadOptions = async (inputValue) => {
        return fetch(
            `${GEO_API_URL}/cities?types=CITY&minPopulation=50000&sort=population&namePrefix=${inputValue}`,
            geoApiOptions
        )
        .then((response) => response.json())
        .then((response) => {
            console.log(response)
            return {
                options: response.data.map((city) => {
                    return {
                        id: city.id,
                        lat: city.latitude,
                        lon: city.longitude,
                        label: `${city.name}, ${city.countryCode}`,
                    };
                }),
            };
        });
    }

    return (
        <AsyncPaginate
            placeholder="Search for city"
            debounceTimeout={1000}
            value={search}
            onChange={handleOnChange}
            loadOptions={loadOptions}
            styles={customStyles}
            className="w-full"
        />
    );
}

export default CitiesSearch;