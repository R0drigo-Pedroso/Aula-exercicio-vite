import { NavLink } from "react-router-dom";

import "./Menu.css";

const Menu = () => {
  return (
    <>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/rock">Jazz</NavLink>
        <NavLink to="/jazz">Rock</NavLink>
      </nav>
    </>
  );
};

export default Menu;
