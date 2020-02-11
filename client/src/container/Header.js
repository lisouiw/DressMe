import React from 'react';
import { withRouter } from 'react-router-dom';


function Header(props) {
    const goHome = () => { props.history.push('/') }

    return (

        <div id="header" className="row d-flex justify-content-center ">
            <p onClick={() => goHome()}>DressMe</p>
        </div>
    )
}

export default withRouter(Header)