import { createContext, useContext, useState, useEffect } from 'react';

const UnitsContext = createContext();

export const UnitsProvider = ({ children }) => {
    const [units, setUnits] = useState('metric');
    const [tempUnit, setTempUnit] = useState('°C');
    const [speedUnit, setSpeedUnit] = useState('m/s')

    const toggleUnits = () => {
      setUnits((prevUnits) => (prevUnits === 'metric' ? 'imperial' : 'metric'));
      
    };
    useEffect(() => {
      setTempUnit(units === 'metric' ? '°C' : '°F');
      setSpeedUnit(units === 'metric' ? 'm/s' : 'mph');
    }, [units]);
  
  return (
    <UnitsContext.Provider value={{ units, toggleUnits, tempUnit, speedUnit}}>
      {children}
    </UnitsContext.Provider>
  )
}

export const useUnitsContext = () => {
  return useContext(UnitsContext);
}

export default UnitsProvider;