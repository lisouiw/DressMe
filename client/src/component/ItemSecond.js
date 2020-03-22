import React from "react";
// import { first } from "../utils/newItem";
import { FormGroup } from "../Route";

const ItemSecond = ({ onClick, data }) => {
  return (
    <React.Fragment>
      <FormGroup
        type="buttonGroup"
        className="row"
        component={{ title: "Season" }}
      />

      <div className="row justify-content-between">
        <FormGroup
          type="upload"
          title="Washing"
          component={{ id: "washing", label: "washing-label" }}
        />
        <img
          id="washing-image"
          className="col-3 rounded float-right p-0"
          src="https://www.morgandetoi.fr/on/demandware.static/-/Sites-Morgan_master/default/dwa2963099/robe-patineuse-manches-longues-rouge-vin-femme-or-32536300774000509.jpg"
          alt="washing"
        />
      </div>
    </React.Fragment>
  );
};

export default ItemSecond;
