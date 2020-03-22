import React, { useState } from "react";

import { wardrobe } from "../utils/word";

function Category({ name, value, i, active, onClick }) {
  let category = i === active ? "active" : "";
  return (
    <React.Fragment>
      <div
        className={`category ${category} item-center`}
        onClick={() => onClick()}
        key={i}
      >
        {name}
      </div>
      {i === active &&
        value.map((value, i) => {
          return (
            <div className="category sub item-center" key={i}>
              {value}
            </div>
          );
        })}
    </React.Fragment>
  );
}

function Menu(props) {
  const [act, setAct] = useState(0);

  return (
    <div id="menu" className="col-3 p-0">
      {Object.entries(wardrobe).map((e, i) => {
        return (
          <Category
            name={e[0]}
            value={e[1]}
            key={i}
            i={i}
            active={act}
            onClick={() => setAct(i)}
          />
        );
      })}
    </div>
  );
}

export default Menu;
