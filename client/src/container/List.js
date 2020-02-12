import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faPlus } from '@fortawesome/free-solid-svg-icons'

import {Modal, Button} from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";

function ShowList(props) {
  const signupPage = () => { props.history.push("/wardrobe") }

  return (
    <div id="show-list" className="align-middle text-center">

<Modal  show={false} onHide>


  <Modal.Header closeButton>
    <Modal.Title>Modal title</Modal.Title>
  </Modal.Header>

  <Modal.Body>
    <p>Modal body text goes here.</p>
  </Modal.Body>

  <Modal.Footer>
    <Button variant="secondary">Close</Button>
    <Button variant="primary">Save changes</Button>
  </Modal.Footer>

</Modal>
      <figure class="figure p-2" style={{ width: "200px" }} >
        <img src="https://www.morgandetoi.fr/on/demandware.static/-/Sites-Morgan_master/default/dwa2963099/robe-patineuse-manches-longues-rouge-vin-femme-or-32536300774000509.jpg" class="figure-img img-fluid rounded" alt="..." />
        <figcaption class="figure-caption text-right">A caption for the above image.</figcaption>
      </figure>
      <figure class="figure p-2" style={{ width: "200px" }}>
        <img src="https://www.morgandetoi.fr/on/demandware.static/-/Sites-Morgan_master/default/dwa2963099/robe-patineuse-manches-longues-rouge-vin-femme-or-32536300774000509.jpg" class="figure-img img-fluid rounded" alt="..." />
        <figcaption class="figure-caption text-right">A caption for the above image.</figcaption>
      </figure>
      <figure class="figure p-2" style={{ width: "200px" }}>
        <img src="https://www.morgandetoi.fr/on/demandware.static/-/Sites-Morgan_master/default/dwa2963099/robe-patineuse-manches-longues-rouge-vin-femme-or-32536300774000509.jpg" class="figure-img img-fluid rounded" alt="..." />
        <figcaption class="figure-caption text-right">A caption for the above image.</figcaption>
      </figure>
      <figure class="figure p-2" style={{ width: "200px" }}>
        <img src="https://www.morgandetoi.fr/on/demandware.static/-/Sites-Morgan_master/default/dwa2963099/robe-patineuse-manches-longues-rouge-vin-femme-or-32536300774000509.jpg" class="figure-img img-fluid rounded" alt="..." />
        <figcaption class="figure-caption text-right">A caption for the above image.</figcaption>
      </figure>
      <figure class="figure p-2" style={{ width: "200px" }}>
        <img src="https://www.morgandetoi.fr/on/demandware.static/-/Sites-Morgan_master/default/dwa2963099/robe-patineuse-manches-longues-rouge-vin-femme-or-32536300774000509.jpg" class="figure-img img-fluid rounded" alt="..." />
        <figcaption class="figure-caption text-right">A caption for the above image.</figcaption>
      </figure>
      <figure class="figure p-2" style={{ width: "200px" }}>
        <img src="https://www.morgandetoi.fr/on/demandware.static/-/Sites-Morgan_master/default/dwa2963099/robe-patineuse-manches-longues-rouge-vin-femme-or-32536300774000509.jpg" class="figure-img img-fluid rounded" alt="..." />
        <figcaption class="figure-caption text-right">A caption for the above image.</figcaption>
      </figure>
      <figure class="figure p-2" style={{ width: "200px" }}>
        <img src="https://www.morgandetoi.fr/on/demandware.static/-/Sites-Morgan_master/default/dwa2963099/robe-patineuse-manches-longues-rouge-vin-femme-or-32536300774000509.jpg" class="figure-img img-fluid rounded" alt="..." />
        <figcaption class="figure-caption text-right">A caption for the above image.</figcaption>
      </figure>
      <figure class="figure p-2" style={{ width: "200px" }}>
        <img src="https://www.morgandetoi.fr/on/demandware.static/-/Sites-Morgan_master/default/dwa2963099/robe-patineuse-manches-longues-rouge-vin-femme-or-32536300774000509.jpg" class="figure-img img-fluid rounded" alt="..." />
        <figcaption class="figure-caption text-right">A caption for the above image.</figcaption>
      </figure>
    </div>
  )
}

function HeaderList(props) {
  const signupPage = () => { props.history.push("/wardrobe") }

  return (
    <div id="header-list" className=" row d-flex d-flex justify-content-center mx-3">
      <div class="dropdown mx-1">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Season
  </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </div>

      <div class="dropdown mx-1">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Style
  </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </div>


      <div class="dropdown mx-1">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Composition
  </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </div>

      <div class="dropdown mx-1">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Color
  </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </div>

      <button type="button" class="btn btn-outline-info btn-sm mx-1">Date</button>

    </div>
  )
}

function List(props) {
  const signupPage = () => { props.history.push("/wardrobe") }

  return (
    <div id="list" className="col-9 p-0">
      <HeaderList />
      <ShowList />
    </div>
  )
}

export default (List)