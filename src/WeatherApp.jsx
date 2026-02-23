import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp(){
    const [weatherInfo , setWeatherInfo] = useState({
         city: "Pune",
        feelslike: 29.04,
        temp: 30.91,
        tempMin: 30.91,
        tempMax: 30.91,
        humidity: 21,
        weather:"clear sky",
    });

    let updateInfo = (result) => {
        setWeatherInfo(result);
    };

    return (
    <div style={{textAlign: "center"}}><h2>Weather App by Sujal</h2>
    <SearchBox updateInfo={updateInfo}/>
    <InfoBox info={weatherInfo}/>
    </div>
  );
}
