import React from "react";
import { first } from "../utils/newItem";
import { FormGroup } from "../Route";

const ItemFirst = ({ onClick, data }) => {
  return (
    <div className="row justify-content-between">
      <div className="d-flex flex-column justify-content-between col-7 p-0">
        {first &&
          first.map((e, i) => {
            return (
              <FormGroup
                key={i}
                {...e}
                component={{ ...e.component, onClick: onClick, items: data.type }}
                // type="upload"
                // title="Photo"
                // component={{ id: "photo", label: "photo-label" }}
              />
            );
          })}

        {/* <FormGroup
          type="upload"
          title="Photo"
          component={{ id: "photo", label: "photo-label" }}
        />
        <FormGroup
          type="dropdown"
          component={{
            items: data.type,
            title: "Type of clothes",
            fct: onClick,
            type: "type"
          }}
        />
        <FormGroup
          type="datePicker"
          title="Date d'achat"
          component={{ required: true }}
        /> */}
      </div>
      <img
        id="photo-image"
        className="col-3 rounded float-righ p-0"
        src="https://www.morgandetoi.fr/on/demandware.static/-/Sites-Morgan_master/default/dwa2963099/robe-patineuse-manches-longues-rouge-vin-femme-or-32536300774000509.jpg"
        alt="clothing"
      />
    </div>
  );
};

export default ItemFirst;
