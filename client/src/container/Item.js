import React from 'react';

function Item(props) {
  // const signupPage = () => { props.history.push("/wardrobe") }

  return (
    <div id="item" class="container-xl m-auto p-5">

      <form class="needs-validation" novalidate>
        <div class="form-group row">
          <div class="input-group mb-3 col-7">
            <div class="input-group-prepend">
              <span class="input-group-text" id="inputGroupFileAddon01">Upload</span>
            </div>
            <div class="custom-file">
              <input type="file" class="custom-file-input" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01" />>
                <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
            </div>
          </div>
          <img classname="col-5" style={{ width: "200px" }} src="https://www.morgandetoi.fr/on/demandware.static/-/Sites-Morgan_master/default/dwa2963099/robe-patineuse-manches-longues-rouge-vin-femme-or-32536300774000509.jpg" class="rounded float-right" alt="..." />
        </div>

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
        <div class="form-group">
          <label for="exampleFormControlSelect1">Date d'achat</label>
          <br />
          <input id="date" type="date" value="2017-06-01" />
        </div>
        <div class="form-group">
          <label for="exampleFormControlFile1">Washing</label>
          <input type="file" class="form-control-file" id="exampleFormControlFile1" />
        </div>

        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">Style</span>
          </div>
          <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username with two button addons" aria-describedby="button-addon4" />
          <div class="input-group-append" id="button-addon4">
            <button class="btn btn-outline-secondary" type="button">Button</button>
          </div>
        </div>

        <br />

        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">Couleur</span>
          </div>
          <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username with two button addons" aria-describedby="button-addon4" />
          <div class="input-group-append" id="button-addon4">
            <button class="btn btn-outline-secondary" type="button">Button</button>
          </div>
        </div>

        <br />



        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">Composition</span>
          </div>
          <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username with two button addons" aria-describedby="button-addon4" />
          <div class="input-group-append" id="button-addon4">
            <button class="btn btn-outline-secondary" type="button">Button</button>
          </div>
        </div>
        <br />




        <div class="form-group">
          <label for="exampleFormControlTextarea1">Notes</label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        <br />

        <hr />
        <br />

        <div class="form-group">
          <label for="exampleFormControlTextarea1">Tags</label>
          <div class="form-control" id="exampleFormControlTextarea1" rows="3">
            coucou lala
          </div>
        </div>
        <br />

        <button class="btn btn-primary" type="submit">Submit form</button>
      </form>
    </div>
  )
}

export default Item
