import './App.css';
import AppRoute from './AppRoute';
import NavBar from './Components/NavBar';
import HeadlineComponents from './Components/HeadlineComponents';
import Login from './Pages/Login';

function App() {

  return (
    <div>
  
    {/*/
      className='mx-auto mt-4 py-5 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl 
    shadow-gray-400'
    */}
      <NavBar />
      <AppRoute />
      <HeadlineComponents/>


    </div>

  );
}

export default App;
