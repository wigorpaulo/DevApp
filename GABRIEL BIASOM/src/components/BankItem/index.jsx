import React from "react";

import "./style.css";

export default function Itens() {
  return (
    <div className="side-data">
      <a href="/saldo">Saldo</a>
      <br />
      <a href="/extrato">Extrato</a>
      <br />
      <a href="/transferencia">Transferência</a>
    </div>
  );
}
