import { NavLink } from "react-router-dom";

import "./Menu.css";

const Menu = () => {
  return (
    <>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/rock">Rock</NavLink>
        <NavLink to="/jazz">Jazz</NavLink>
      </nav>
    </>
  );
};

export default Menu;
