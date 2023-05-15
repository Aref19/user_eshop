import logo from './logo.svg';
import './App.css';
import Load from './component/Load'
import Ware from './component/Ware'; 
import Navbar from './component/Navbar';

function App() {
  return (
    <div className="App">
     <Navbar/>

     <Ware/>
    </div>
  );
}

export default App;
