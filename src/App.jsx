import { useState } from 'react'
import { Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import NavComp from './components/NavComp';
import Today from './pages/Today';
import Hourly from './pages/Hourly';
import Daily from './pages/Daily';
import Main from './components/Main'
import AirQuality from './pages/AirQuality';

import Polutant from './components/AirQuality/Polutant';
import AQScale from './components/AirQuality/AQScale';

import HourlyDetail from './pages/HourlyDetail';
import { ForecastProvider } from './pages/ForecastContext';
import DailyAccordian from './components/Daily/DailyAccordian';
import HourlyWeatherDetail from './components/Daily/HourlyWeatherDetail';
// import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&display=swap');

function App() {
  const [count, setCount] = useState(0)

  return (
      <ForecastProvider>
        <NavComp />
        
        {/* <Main /> */}

        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/today" element={<Today />} />
          <Route path="/hourly" element={<Hourly />} />
          <Route path="/daily" element={<Daily />} />
          {/* <Route path="/radar" element={<Radar />} /> 
          {/* <Route path="/minutecast" element={<MinuteCast />} />
          <Route path="/monthly" element={<Monthly />} /> */}
          <Route path="/air-quality" element={<AirQuality />} />
          <Route path='/polutant' element={<Polutant />} />
          <Route path='/airQualityScale' element={<AQScale />} />

          <Route path='/hourlyDetail/:index' element={<HourlyDetail />} />
          <Route path='/dailyAccordian/:index' element={<DailyAccordian />} />
          <Route path='/hourlyWeatherDetail/:index/:hourIndex' element={<HourlyWeatherDetail />} />
        </Routes>
      </ForecastProvider>

  )
}

export default App
