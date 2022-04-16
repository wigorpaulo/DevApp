import React, { useState } from "react";
import Login from "./Telas/login";
import Interior from "./Telas/interior";
function App() {
  const [usr, setUsr] = useState({})
  const [validou, setValidou] = useState(false)
  const [saldoIni, setSaldoIni] = useState({})

  const dtUser = (dt) =>{
      setUsr(dt)
     setValidou(true);
  }
  const deslogar = () => {
    setValidou(false)
    setUsr({})
  }
  return (
    <div className="App">
      {
        validou ? <Interior usuario = {usr} iniciaSaldo={saldoIni} deslogar={deslogar}/>
        : 
        <Login metodo={e=>dtUser(e)} iniciaSaldo={setSaldoIni}/>
      }
    </div>
  );
}

export default App;
