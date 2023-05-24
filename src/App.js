import './App.css';
import Navbar from './component/Navbar';
import Connection from './component/Connication';
import {
  Router,
  Outlet,
  Link
} from 'react-location';
import { routes } from './router/Router'
import { ReactLocation } from 'react-location';
import PersisttLogin from './component/PersistLogin';


const location = new ReactLocation();


function App() {

  return (
    <div className="App">

      <Router 
        location={location}
        routes={routes}
      >
        <Navbar />
        <PersisttLogin />
        <Connection />
      </Router>

    </div>
  );
}

export default App;

