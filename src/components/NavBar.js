import './NavBar.css';
import Cart from './Carrito/CartWidget';
import { useState } from 'react';
import { BiJoystick } from "react-icons/bi";
import { Link } from 'react-router-dom';


function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <a className="navbar-brand" href='Inicio'><BiJoystick fontSize={40}/></a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav mx-auto">
        <Link className="nav-item nav-link active" to="./Inicio">Inicio</Link>
        <Link className="nav-item nav-link active" to="./Productos">Productos</Link>
        <Link className="nav-item nav-link active" to="./Carrito">Carrito <Cart/>{useState()}</Link>
      </div>
    </div>
  </nav>
  );
}


export default NavBar;