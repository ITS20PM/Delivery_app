import './App.css';
import NavBar from './Components/NavBar';
import Main from './Components/Main';
import MainComponents from './Components/MainComponents';

function App() {

  return (
    <div>
  
    {/*/
      className='mx-auto mt-4 py-5 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl 
    shadow-gray-400'
    */}
      <NavBar />
      <Main/>
      <MainComponents/>
    </div>
  );
}

export default App;
