import './App.css';
import UilReact from '@iconscout/react-unicons/icons/uil-react';
import Buttons from './Components/Buttons';
import Inputs from './Components/Inputs';
import Time_Location from './Components/Time_Location';
import Temperature_Detail from './Components/Temperature_Detail';
import Forecast from './Components/Forecast';
import weather_data from './Services/weatherServices';
import get_formatted_weather_data from './Services/weatherServices';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {

  const [query, set_query] = useState({q: "berlin"});
  const [units, set_units] = useState('metric');
  const [weather, set_weather] = useState(null);

  useEffect(() => {
    const fetch_weather = async () => {
      const msg = query.q ? query.q : "current location.";

      toast.info("Weather for " + msg);

      await get_formatted_weather_data({...query, units}).then((data) => {
        toast.success(
          `Successfully fetch weather data: ${data.name}, ${data.country}.`
        );
        set_weather(data);
      });
      
    };

    fetch_weather();
  }, [query, units]);

  const format_background = () => {
    if (!weather)
      return "from-cyan-700 to-blue-700";

    const threshold = units == "metric" ? 20 : 60;
    if (weather.temp <= threshold)
      return "from-cyan-700 to-blue-700";
  }

  return (
    <div className='mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl 
    shadow-gray-400'>

      <Buttons set_query={set_query}/>
      <Inputs set_query={set_query} units={units} set_units={set_units} />
      
      {weather && (
        <div>
        <Time_Location />
        <Temperature_Detail />
          
        <Forecast title="hourly forecast"/>
        <Forecast title="daily forecast"/>
      </div>
      )} 

      <ToastContainer autoClose={5000} theme="colored" newestOnTop={true}/>
    </div>
  );
}

export default App;
