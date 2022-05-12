import React from "react";
import NotTheDroids from '../imgs/NotTheDroids.webp';

const Error = props => {

    return(
        <div className="m-5 row justify-content-center">
            <span className="text-warning fs-1">Error!</span>
            <div className="col-auto text-center">
                <img src={NotTheDroids} alt="Not The Droids You're Looking For" />
            </div>
        </div>
    )
}

export default Error;