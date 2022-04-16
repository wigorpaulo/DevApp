import React from "react";
import "./style.css";
import reactIcon from "../../img/react-icon.svg";
import Itens from "../BankItem";
import "../Animation/Animation.css";
// import { useNavigation } from '@react-navigation/native';
// import { useNavigate } from '@react-navigation/native';

export default function Navbar() {
  // let navigate = useNavigate();

  // function sair() {
  //   localStorage.clear();
  //   navigate("/");
  // }
  return (
    <nav className="navbar">
      <span className="title-sidebar">React Bank</span>
      <Itens />

      <img src={reactIcon} alt="icon" className="react" />
    </nav>
  );
}
