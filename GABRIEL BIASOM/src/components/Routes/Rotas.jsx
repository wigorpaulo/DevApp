import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Saldo from "../Pages/Saldo";
import Extrato from "../Pages/Extrato";
import Transferencia from "../Pages/Transferencia";
import "./style.css";
import Login from "../Pages/Login";
import CadastroLogin from "../Pages/Cadastro/CadastroLogin";
import Navbar from "../Navbar";

export default function Rotas() {
  return (
    <div className="main">
      <div className="container">
        {/* <Itens /> */}
        <Router>
          {/* <ul className="grid-item">
           <li>
             <Link to="/">Saldo</Link>
           </li>
           <li>
             <Link to="/extrato">Extrato</Link>
           </li>
           <li>
             <Link to="/transferencia">Transferencia</Link>
           </li>
         </ul> */}
          <Routes>
            <Route exact path="/" element={<Login />} />
          </Routes>
          {/* <Routes>
            <Route exact path="/home" element={<Navbar />} />
          </Routes> */}
          <Routes>
          <Route path="/cadastrar" element={<CadastroLogin />} />
          </Routes>
          <Routes>
            <Route path="/saldo" element={<Saldo />} />
          </Routes>
          <Routes>
            <Route path="/extrato" element={<Extrato />} />
          </Routes>
          <Routes>
            <Route path="/transferencia" element={<Transferencia />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}
