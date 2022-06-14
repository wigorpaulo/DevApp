import './Menu.css';
import React from "react";

const Menu = props => (
    <aside className="Menu">
        <nav>
            <ul>
                <li>
                    <a href="/">Inicio</a>
                </li>
                <li>
                    <a href="/">Sobre</a>
                </li>
                <li>
                    <a href="/">Extrato</a>
                </li>
            </ul>
        </nav>
    </aside>
)
export default Menu;