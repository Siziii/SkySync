import { createContext, useContext, useState } from 'react';

const CityContext = createContext();

export const CityProvider = ({ children }) => {
  const [cities, setCities] = useState([
    { id: 1, label: "Zagreb, HR", lat: "45.8150", lon: "15.9819" },
    { id: 2, label: "Berlin, DE", lat: "52.5200", lon: "13.4050" },
  ]);

  const addCity = (city) => {
    const newCity = city;
    setCities([...cities, newCity]);
  };

  const deleteCity = (city) => {
    const updatedCities = cities.filter((c) => c !== city);
    setCities(updatedCities);
  };

  return (
    <CityContext.Provider value={{ cities,setCities, addCity, deleteCity }}>
      {children}
    </CityContext.Provider>
  )
}

export const useCityContext = () => {
  return useContext(CityContext);
}

export default CityProvider;