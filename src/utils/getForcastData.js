import { DateTime } from "luxon";
const API_KEY = import.meta.env.VITE_APP_API_KEY;

const BASE_URL = "https://api.openweathermap.org/data/2.5";

const getWeatherData = (infoType, searchParams) => {
    const url = new URL(BASE_URL + "/" + infoType);
    url.search = new URLSearchParams({ ...searchParams, appid: API_KEY }); 
    console.log(url)
    return fetch(url).then((res) => res.json());
};

const formatCurrentWeather = (data) => {
    const {
        main: { temp, feels_like, temp_min, temp_max, humidity, pressure },
        name,
        dt,
        sys: { sunrise, sunset },
        weather,
        wind: { speed, deg },
    } = data;

    const { main: details, description } = weather[0];

    // Convert temperatures to Celsius
    const tempCelsius = Math.round(temp - 273.15);
    const feels_likeCelsius = Math.round(feels_like - 273.15);
    const temp_minCelsius = Math.round(temp_min - 273.15);
    const temp_maxCelsius = Math.round(temp_max - 273.15);

    // Format sunrise and sunset times
    const formattedTime = formatToLocalTime(dt, data.timezone, "hh:mm a");
    const formattedDate = formatToLocalTime(dt, data.timezone, "dd/MM/yyyy");
    const formattedSunrise = formatToLocalTime(sunrise, data.timezone, "hh:mm a");
    const formattedSunset = formatToLocalTime(sunset, data.timezone, "hh:mm a");

    return {
        tempCelsius,
        feels_likeCelsius,
        temp_minCelsius,
        temp_maxCelsius,
        humidity,
        name,
        formattedTime,
        formattedDate,
        formattedSunrise,
        formattedSunset,
        details,
        description,
        speed,
        deg,
        pressure,
    };
};

const formatForecastWeather = (data) => {
    let { timezone, list } = data;
    const forecastList = list.map((d) => {
        return {
            date: formatToLocalTime(d.dt, timezone, "dd/MM/yyyy"),
            time: formatToLocalTime(d.dt, timezone, "hh:mm a"),
            temp: Math.round(d.main.temp - 273.15),
            desc: d.weather[0].main,
            id: d.weather[0].id,
        };
    });
    return { timezone, forecastList };
};


const getFormattedWeatherData = async (searchParams) => {
    const formattedCurrentWeather = await getWeatherData(
        "weather",
        searchParams
    ).then(formatCurrentWeather);
    const formattedForecastWeather = await getWeatherData(
        "forecast",
        searchParams
    ).then(formatForecastWeather);

    return { ...formattedForecastWeather, ...formattedCurrentWeather };
};

const formatToLocalTime = (
    secs,
    zone,
    format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a"
) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

export default getFormattedWeatherData