import './App.css';
import UilReact from '@iconscout/react-unicons/icons/uil-react';
import Buttons from './Components/Buttons';
import Inputs from './Components/Inputs';
import Time_Location from './Components/Time_Location';
import Temperature_Detail from './Components/Temperature_Detail';
import Forecast from './Components/Forecast';
import weather_data from './Services/weatherServices';

function App() {

  const fetch_weather = async () => {
    const data = await get_formatted_weather_data('weather', {q: "london"});
    console.log(data);
  };

  return (
    <div className='mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl 
    shadow-gray-400'>

      <Buttons />
      <Inputs />
      
      <Time_Location />
      <Temperature_Detail />
      
      <Forecast title="hourly forecast"/>
      <Forecast title="daily forecast"/>

    </div>
  );
}

export default App;
