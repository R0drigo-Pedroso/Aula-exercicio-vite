import { NavLink } from "react-router-dom";

import "./Menu.css";

const Menu = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/mpb">MPB</NavLink>
          </li>
          <li>
            <NavLink to="/rock">Rock</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Menu;
