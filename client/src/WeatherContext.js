import { createContext, useState, useEffect } from "react";

export const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState();
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const q = `${position.coords.latitude},${position.coords.longitude}`;
      const key = process.env.REACT_APP_WEATHER;
      fetch(`http://api.weatherapi.com/v1/current.json?key=${key}&q=${q}`)
        .then((res) => res.json())
        .then((data) => setWeatherData(data));
    });
  }, []);

  return (
    <DataContext.Provider value={{ weatherData }}>
      {children}
    </DataContext.Provider>
  );
};
