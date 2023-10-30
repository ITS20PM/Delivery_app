import './App.css';
import NavBar from './Components/NavBar';
import MainComponents from './Components/MainComponents';
import HeadlineComponents from './Components/HeadlineComponents';

function App() {

  return (
    <div>
  
    {/*/
      className='mx-auto mt-4 py-5 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl 
    shadow-gray-400'
    */}
      <NavBar />
      <MainComponents/>
      <HeadlineComponents/>

    </div>
  );
}

export default App;
