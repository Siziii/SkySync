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
        sys: { sunrise, sunset, timezone },
        weather,
        wind: { speed, deg },
    } = data;

    const { main: details, description, icon } = weather[0];

    return {
        temp,
        feels_like,
        temp_min,
        temp_max,
        humidity,
        name,
        dt,
        details,
        description,
        speed,
        deg,
        pressure,
        icon,
        sunrise,
        sunset,
        timezone
    };
};

const formatForecastWeather = (data) => {
    let { timezone, list } = data;
    const forecastList = list.map((d) => {
        return {
            dt: d.dt,
            temp: d.main.temp,
            desc: d.weather[0].main,
            id: d.weather[0].id,
            icon: d.weather[0].icon,
        };
    });
    return { timezone, forecastList };
};


const getFormattedWeatherData = async (searchParams) => {
    console.log('Units in getFormattedWeatherData:', searchParams.units);
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

export const formatToLocalDate = (secs, zone, format = "dd LLL yyyy") => {
    return DateTime.fromSeconds(secs).setZone(zone).toFormat(format);
}
export const formatToLocalTime = (secs, zone, units) => {
    const isMetric = units === 'metric';
    const timeFormat = isMetric ? "HH:mm" : "hh:mm a";
    return DateTime.fromSeconds(secs).setZone(zone).toFormat(timeFormat);
}

const iconUrlFromCode = (code) => {
    return `http://openweathermap.org/img/wn/${code}@2x.png`;
}

export { iconUrlFromCode };
export default getFormattedWeatherData