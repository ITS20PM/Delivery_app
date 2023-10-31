import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import NavBar from './Components/NavBar';
import MainComponents from './Components/MainComponents';
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
      <MainComponents/>
      <HeadlineComponents/>

      <Router>
        <Routes>
          <Route 
            exact 
            path="/Login" 
            element={<Login />}
          />
        </Routes>
      </Router>
    </div>

  );
}

export default App;
