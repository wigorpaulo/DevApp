
import './App.css';

import Navbar from "./components/Navbar/index"
import Rotas from './components/Routes/Rotas';

import "./components/Pages/style.css";



function App() {
  return (
    <div>
      <div className="App">
        <Navbar />
      </div>
      <div>
        <Rotas />
      </div>
    </div>
  );
}

export default App;
