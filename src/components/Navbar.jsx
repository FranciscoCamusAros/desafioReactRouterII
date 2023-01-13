import { NavLink } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';

export default function NavBar() {
  const setActiveClass = ({ isActive }) => (isActive ? "active" : "non-active");
  return (
    <Navbar className="d-flex px-5 bg-dark py-lg-0 justify-content-between">
      <Navbar.Brand>
        <img width="100" src="/pokemon_logo_navbar.png" alt="logo"/>
      </Navbar.Brand>
      <div className="justify-content-end">
        <NavLink className={setActiveClass} to="/">
          Home
        </NavLink>
        {" - "}
        <NavLink className={setActiveClass} to="/pokemones">
          Pokemones
        </NavLink>
      </div>
    </Navbar>
  );
}