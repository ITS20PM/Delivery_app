import { DateTime } from "luxon";

const API_Key = "88a3affac7dc381106ad2e97e581b508";
const base_url = "https://api.openweathermap.org/data/2.5/";

const get_weather_data = (infoType, searchParams) => {
    const url = new URL(base_url + "/" + infoType);
    url.search = new URLSearchParams({ ...searchParams, appid: API_Key});

    console.log(url);

    return fetch(url)
        .then((res) => res.json());
}

const format_cur_weather = (data) => {
    const {
        coord: {lat, lon},
        main: {temp, feels_like, temp_min, temp_max, humidity},
        name,
        dt,
        sys: {country, sunrise, sunset},
        weather,
        wind: {speed}
    } = data

    const {main: details, icon} = weather[0];

    return {lat, lon, temp, feels_like, temp_min, temp_max, 
        humidity, name, dt, country, sunrise, sunset, details, icon, speed};
}

const format_forecast = (data) => {
    
    let {timezone, daily, hourly} = data;
    console.log(typeof data);
    
    /*daily = daily.slice(1,6).map(d => {
        return {
            title: format_local_time(d.dt, timezone, 'ccc'),
            temp: d.temp.day,
            icon: d.weather[0].icon
        }
    });

    hourly = hourly.slice(1, 6).map(d => {
        return {
            title: format_local_time(d.dt, timezone, 'hh:mm a'),
            temp: d.temp.day,
            icon: d.weather[0].icon
        }
    });*/

    return {timezone, daily, hourly};
}

const get_formatted_weather_data = async (searchParams) => {
    const formatted_cur_weather = await get_weather_data(
        'weather', 
        searchParams)
        .then(format_cur_weather);

    const {lat, lon} = formatted_cur_weather;

    const formatted_forecast = await get_weather_data('onecall', {
        lat, 
        lon, 
        exclude: "current,minutely,alerts", 
        units: searchParams.units
    }).then(format_forecast);

    return { ...formatted_cur_weather, ...formatted_forecast};
}

const format_local_time = (
    secs, 
    zone, 
    format = "cccc, dd LLL yyyy' | local time: 'hh:mm a") => 
    DateTime.fromSeconds(secs).setZone(zone).toFormat(format);


const icon_url = (code) => `http://openweathermap.org/img/wn/${code}@2x.png`;

export default get_formatted_weather_data;

export { format_local_time, icon_url};