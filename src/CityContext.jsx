import { createContext, useContext, useState } from 'react';

const CityContext = createContext();

export const CityProvider = ({ children }) => {
  const [cities, setCities] = useState([
    { id: 1, name: "Berlin" },
    { id: 2, name: "Zagreb" },
  ]);

  const addCity = (cityName) => {
    const newId = new Date().getTime();
    const newCity = { id: newId, name: cityName };
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