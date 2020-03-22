import React from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { Form, InputGroup, Dropdown, ListGroup } from "react-bootstrap";

const Input = component => {
  return (
    <React.Fragment>
      <Form.Control {...component} className="is-valid " />
    </React.Fragment>
  );
};

const DatePicker = component => {
  return (
    <React.Fragment>
      <br />
      <Form.Control type="date" {...component} />
    </React.Fragment>
  );
};

const Text = component => {
  return <Form.Control as="textarea" {...component} />;
};

const Upload = ({ id, label }) => {
  return (
    <InputGroup id={id}>
      <div className="custom-file">
        <Form.Control type="file" className="custom-file-input" />
        <label
          className="custom-file-label"
          style={{ overflow: "hidden" }}
          id={label}
        >
          Choose file
        </label>
      </div>
    </InputGroup>
  );
};

const DropdownComponent = ({ title, items, select, onClick, type }) => {
  return (
    <Dropdown className="d-flex">
      <Dropdown.Toggle className="bg-secondary border-0">
        {title}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {items &&
          items.map((value, i) => (
            <Dropdown.Item
              className="text-dark"
              key={i}
              onClick={() => {
                onClick(value.id, type);
              }}
            >
              {value.name}
            </Dropdown.Item>
          ))}
      </Dropdown.Menu>
      <div className="m-auto word">{select}</div>
    </Dropdown>
  );
};

const ButtonGroup = ({ title, type, fct }) => {
  return (
    <Form.Group>
      <label>{title}</label>
      <br />

      <div className="btn-group btn-group-toggle" data-toggle="buttons">
        <label className="btn btn-dark focus" onClick={() => fct(1)}>
          <input type="radio" name="options" id="option1" /> All
        </label>
        <label className="btn btn-light" onClick={() => fct(2)}>
          <input type="radio" name="options" id="option2" /> Spring
        </label>
        <label className="btn btn-warning" onClick={() => fct(3)}>
          <input type="radio" name="options" id="option3" />
          Summer
        </label>
        <label className="btn btn-danger" onClick={() => fct(4)}>
          <input type="radio" name="options" id="option4" />
          Autumn
        </label>
        <label className="btn btn-info focus" onClick={() => fct(5)}>
          <input type="radio" name="options" id="option5" />
          Winter
        </label>
      </div>
    </Form.Group>
  );
};

const ListGroupComponent = ({ title, placeholder, items, fct, type }) => {
  return (
    <React.Fragment>
      <div>
        <label>{title}</label>
        <ListGroup style={{ height: "200px", overflow: "scroll" }}>
          {items &&
            items.map(({ name, id }, i) => (
              <ListGroup.Item
                key={i}
                action
                onClick={e => {
                  fct(id, type);
                }}
              >
                {name}
              </ListGroup.Item>
            ))}
        </ListGroup>
      </div>
    </React.Fragment>
  );
};

const TagDisplay = ({ tags }) => {
  return (
    <div className="form-control">
      {tags.join(" ")}
    </div>
  );
};

const components = {
  buttonGroup: ButtonGroup,
  datePicker: DatePicker,
  dropdown: DropdownComponent,
  input: Input,
  listGroup: ListGroupComponent,
  tagDiplay: TagDisplay,
  text: Text,
  upload: Upload
};

const FormGroup = ({ id, type, title, children, className, component }) => {
  let SpecificStory;

  if (type !== "") SpecificStory = components[type];
  return (
    <Form.Group className={`form-group ${className}`}>
      <label>{title}</label>
      {SpecificStory ? <SpecificStory {...component} /> : children}
    </Form.Group>
  );
};

export default FormGroup;
