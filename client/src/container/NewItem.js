import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faPlus } from '@fortawesome/free-solid-svg-icons'




const DatePicker = () => {
  return (
    <React.Fragment>
      <br />
      <input id="date" type="date" value="2017-06-01" />
    </React.Fragment>
  )
}

const Text = () => {
  return (
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  )
}

const Upload = ({ title, placeholder, button }) => {

  return (
    <div class="input-group">
      <div class="input-group-prepend">
        <span class="input-group-text custom-file" id="inputGroupFileAddon01">Upload</span>
      </div>
      <div class="custom-file">
        <input type="file" class="custom-file-input" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01" />>
        <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
      </div>
    </div>
  )
}

const Dropdown = ({ title, placeholder, button }) => {

  return (
    <div class="btn-group">
      <button class="btn btn-secondary btn-md dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Type of clothes
      </button>
      <div class="dropdown-menu">
        <div>Robe</div>
        <div>Jean</div>
        <div>Casquette</div>
        <div>Veste</div>
      </div>
    </div>
  )
}

const ButtonGroup = ({ title, placeholder, button }) => {

  return (
    <div class="form-group">
      <label for="exampleFormControlFile1">Season</label>
      <br />

      <div class="btn-group btn-group-toggle" data-toggle="buttons">
        <label class="btn btn-dark focus">
          <input type="radio" name="options" id="option1" /> All
</label>
        <label class="btn btn-light">
          <input type="radio" name="options" id="option2" /> Spring
</label>
        <label class="btn btn-warning">
          <input type="radio" name="options" id="option3" />Summer
</label>
        <label class="btn btn-danger">
          <input type="radio" name="options" id="option4" />Autumn
</label>
        <label class="btn btn-info focus">
          <input type="radio" name="options" id="option5" />Winter
</label>
      </div>

    </div>
  )
}

const InputGroup = ({ title, placeholder}) => {

  return (
    <div class="input-group">
      <div class="input-group-prepend">
        <span class="input-group-text">{title}</span>
      </div>
      <input type="text" class="form-control" placeholder={placeholder} aria-label="Recipient's username with two button addons" aria-describedby="button-addon4" />
      <div class="input-group-append" id="button-addon4">
        <button class="btn btn-outline-secondary" type="button">
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
    </div>
  )
}


const components = {
  buttonGroup: ButtonGroup,
  datePicker: DatePicker,
  dropdown: Dropdown,
  inputGroup: InputGroup,
  text: Text,
  upload: Upload,
};


const FormGroup = ({ type, title, children, className, component }) => {
  let SpecificStory;

  if (type !== "")
    SpecificStory = components[type];
  return (
    <div className={`form-group ${className}`}>
      <label for="exampleFormControlTextarea1">{title}</label>
      {
        SpecificStory
          ? <SpecificStory {...component}/>
          : children
      }
    </div>
  )
}

function NewItem(props) {
  const signupPage = () => { props.history.push("/wardrobe") }

  return (
    <div id="item" class="container-xl m-auto p-5">

      <form class="needs-validation" novalidate>

        <div class="row justify-content-between">
          <div className="d-flex flex-column justify-content-between col-7 p-0">
            <FormGroup type="upload" />
            <FormGroup type="dropdown" />
            <FormGroup type="datePicker" title="Date d'achat" />
          </div>
          <img classname="col-5" style={{ width: "200px" }} src="https://www.morgandetoi.fr/on/demandware.static/-/Sites-Morgan_master/default/dwa2963099/robe-patineuse-manches-longues-rouge-vin-femme-or-32536300774000509.jpg" class="rounded float-right" alt="..." />
        </div>


        <FormGroup type="buttonGroup"  className="row" />

        <div className="row justify-content-between">
          <FormGroup type="upload" title="Washing" />
          <img classname="col-5" style={{ width: "200px" }} src="https://www.morgandetoi.fr/on/demandware.static/-/Sites-Morgan_master/default/dwa2963099/robe-patineuse-manches-longues-rouge-vin-femme-or-32536300774000509.jpg" class="rounded float-right" alt="..." />
        </div>

        <FormGroup type="inputGroup" component={{title:"Style", placeholder:"Street, boheme,rock..." }}/>
        <FormGroup type="inputGroup" component={{title:"Color", placeholder:"Street, boheme,rock..." }}/>
        <FormGroup type="inputGroup" component={{title:"Composition", placeholder:"Street, boheme,rock..." }}/>
        <FormGroup type="text" title="Notes" />

        <br /><hr /><br />

        <FormGroup title="Tags">
          <div class="form-control" id="exampleFormControlTextarea1" rows="3">
            coucou lala
          </div>
        </FormGroup>

        <br />

        <button class="btn btn-primary" type="submit">Submit form</button>
      </form>
    </div>
  )
}

export default NewItem
