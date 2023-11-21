import { createContext, useContext, useState } from 'react';

const CityContext = createContext();

export const CityProvider = ({ children }) => {
  const [cities, setCities] = useState(["berlin","zagreb"]);
  
  const addCity = (city) => {
    setCities([...cities, city]);
  }
  const deleteCity = (city) => {
    const updatedCities = cities.filter((c) => c !== city);
    setCities(updatedCities);
  };

  return (
    <CityContext.Provider value={{ cities, addCity }}>
      {children}
    </CityContext.Provider>
  )
}

export const useCityContext = () => {
  return useContext(CityContext);
}

export default CityProvider;