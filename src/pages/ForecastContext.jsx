
import React, { createContext, useState } from 'react';

export const ForecastContext = createContext();

export const ForecastProvider = ({ children }) => {
    const [forecastData, setForecastData] = useState(null);

    return (
        <ForecastContext.Provider value={{ forecastData, setForecastData }}>
            {children}
        </ForecastContext.Provider>
    );
};
