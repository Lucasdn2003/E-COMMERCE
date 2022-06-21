import './NavBar.css';
import Cart from './CartWidget';
import { useState } from 'react';
import { BiJoystick } from "react-icons/bi";


function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <a className="navbar-brand" href='Inicio'><BiJoystick fontSize={40}/></a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav mx-auto">
        <a className="nav-item nav-link active" href="./Inicio">Inicio</a>
        <a className="nav-item nav-link active" href="./Productos">Productos</a>
        <a className="nav-item nav-link active" href="./Carrito">Carrito <Cart/>{useState()}</a>
      </div>
    </div>
  </nav>
  );
}


export default NavBar;