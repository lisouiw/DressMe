import React from "react"

function Statistic(props) {

    return (
        <div id="statistic">
            {/* <table class="table">
            <thead class="thead-dark">
                    <tr>
                        <th scope="col">All</th>
                        <th scope="col">Spring</th>
                        <th scope="col">Summer</th>
                        <th scope="col">Fall</th>
                        <th scope="col">Winter</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">157</th>
                        <th scope="row">30</th>
                        <th scope="row">67</th>
                        <th scope="row">87</th>
                        <th scope="row">34</th>
                    </tr>
                </tbody>
            </table> */}


            <div class="container-fluid text-center">
                <div class="row">
                    <div class="col p-0">
                        <div class="p-2">All</div>
                        <div class="p-2">210</div>
                    </div>
                    <div class="col p-0">

                        <div class="p-2">Spring</div>
                        <div class="p-2">210</div>
                    </div>
                    <div class="col p-0">

                        <div class="p-2">Summer</div>
                        <div class="p-2">210</div>
                    </div>
                    <div class="col p-0">

                        <div class="p-2">Fall</div>
                        <div class="p-2">210</div>
                    </div>
                    <div class="col p-0">

                        <div class="p-2">Winter</div>
                        <div class="p-2">210</div>
                    </div>
                </div>
                {/* <div class="row">
                    <div class="col-sm">210</div>
                    <div class="col-sm">122</div>
                    <div class="col-sm">32</div>
                    <div class="col-sm">43</div>
                    <div class="col-sm">54</div>
                </div> */}
            </div>
        </div>
    )
}

export default Statistic
