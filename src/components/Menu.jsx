import React from "react";
import { Classification, Region } from "./data";
const Menu = ({ handleClick, selected }) => {
  return (
    <div className="sidenav">
      <div className="navbar-inner-container" style={{ background: "yellow" }}>
        <h2 className="sidenav-options">Classifications</h2>
        {Classification.map((c) => (
          <div>
            <button
              id={c}
              className={`button ${selected.includes(c) ? `active` : ""}`}
              onClick={() => handleClick("group", c)}
            >
              {c}
            </button>
          </div>
        ))}
      </div>
      <div className="navbar-inner-container" style={{ background: "red" }}>
        <h2 className="sidenav-options">Regions</h2>
        {Region.map((c) => (
          <div>
            <button className={`button ${selected.includes(c) ? `active` : ""}`}
             onClick={() => handleClick("region", c)}>
              {c}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
