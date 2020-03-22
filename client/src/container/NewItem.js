import React, { useState, useEffect } from "react";
import { FormGroup,ItemFirst, ItemSecond, ItemThird } from "../Route";
import { get } from "../query";
import { Form, Button } from "react-bootstrap";

const query = {
  color: get.getColor,
  composition: get.getComposition,
  style: get.getStyle,
  type: get.getType
};

const getData = async type => {
  return new Promise((resolve, reject) => {
    return query[type]
      .then(e => resolve(e.data.result))
      .catch(() => {
        reject([]);
      });
  });
};

const handleSubmit = (event, setValidated) => {
  console.log({ ...event.target });
  const form = event.currentTarget;
  if (form.checkValidity() === false) {
    event.preventDefault();
    event.stopPropagation();
  }

  if (event.target.type === "form") setValidated(true);
};

const showFileName = (event, title) => {
  const infoArea = document.getElementById(`${title}-label`);
  const img = document.getElementById(`${title}-image`);
  const input = event.srcElement;

  if (input.files[0]) {
    infoArea.textContent = input.files[0].name;

    const reader = new FileReader();
    reader.readAsDataURL(input.files[0]);

    reader.onload = function(e) {
      img.src = e.target.result;
      // get loaded data and render thumbnail.
    };
  }
};

const initialState = {
  color: [],
  composition: [],
  style: [],
  type: []
};

async function fetchData(data, setData, fct) {
  return Promise.all([
    getData("color"),
    getData("composition", setData, data),
    getData("style", setData, data),
    getData("type", setData, data)
  ]).then(e => {
    setData(
      {
        color: e[0],
        composition: e[1],
        style: e[2],
        type: e[3],
        season: []
      },
      fct()
    );
  });
}

function NewItem(props) {
  const [data, setData] = React.useState(initialState);
  const [form, setForm] = React.useState(initialState);
  const [validated, setValidated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let photo = document.getElementById("photo");
    let washing = document.getElementById("washing");

    if (isLoading === true) {
      fetchData(data, setData, () => {
        setIsLoading(false);
      });
    } else if (isLoading === false && photo && washing) {
      photo.addEventListener("change", e => showFileName(e, "photo"));
      washing.addEventListener("change", e => showFileName(e, "washing"));
    }
  });

  const onClick = (i, type) => {
    type === "type"
      ? setForm({ ...form, [type]: i })
      : setForm(old => ({ ...old, [type]: [...old[type], i] }));
  };

  if (isLoading) return <div>Loading</div>;
  return (
    <div id="item" className="container-xl m-auto p-5">
      <Form
        className="p-4"
        noValidate
        validated={validated}
        onSubmit={e => handleSubmit(e, setValidated)}
      >
        <ItemFirst onClick={onClick} data={data}/>
        <ItemSecond onClick={onClick} data={data}/>
        <ItemThird onClick={onClick} data={data}/>

        <br />
        <hr />
        <br />

        <FormGroup
          className="row"
          title="Tags"
          type="tagDiplay"
          component={{ tags: ["red", "street", "winter"] }}
        />

        <br />

        <Button className="btn btn-primary" type="submit">
          Submit form
        </Button>
      </Form>
    </div>
  );
}

export default NewItem;
