import React from "react";
import { third } from "../utils/newItem";
import { FormGroup } from "../Route";

const ItemThird = ({ onClick, data }) => {
  console.log(data);
  return (
    <div className="row d-flex flex-column">
      {third &&
        third.map((e, i) => (
          <FormGroup
            key={i}
            type="listGroup"
            component={{ ...e, items: data[e.type], fct: onClick }}
          />
        ))}
      <FormGroup type="text" title="Notes" component={{ rows: "3" }} />
    </div>
  );
};

export default ItemThird;
