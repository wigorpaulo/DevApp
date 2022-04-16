import './App.css';
import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {TelaLogin} from "./Login";
import {Register} from "./Register";
import {Home} from "./Home";
import {PagarView} from "./Pagar";
import {ReceberView} from "./Receber";


export const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" exact element={<TelaLogin />} />
                <Route path="/register" exact element={<Register />} />
                <Route path="/home" exact element={<Home />} />
                <Route path="/pagamento" exact element={<PagarView />} />
                <Route path="/receber" exact element={<ReceberView />} />
            </Routes>
        </Router>
    )
}


// const App = props => (
//     <div className="App">
//         <TelaLogin />
//     </div>
// )
//
export default App