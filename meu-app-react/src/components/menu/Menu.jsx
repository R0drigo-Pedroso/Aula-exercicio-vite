import { NavLink } from "react-router-dom";

import "./Menu.css";

const Menu = () => {
  return (
    <>
      <nav>
        <NavLink to="/">Home</NavLink>

        <NavLink to="/mpb">MPB</NavLink>

        <NavLink to="/rock">Rock</NavLink>
      </nav>
    </>
  );
};

export default Menu;
