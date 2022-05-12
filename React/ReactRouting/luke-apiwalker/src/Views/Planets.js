import React from "react";

const Planets = props => {
    const result = props.results;
    return(
        <div className="m-5 row justify-content-center">
            <div className="col-12 text-center">
                <span className="display-3">Planets!</span>
            </div>
            <div className="col text-start">
                {Object.keys(result).map((k, i) => 
                    <li key={i}>{k}: {result[k]}</li>
                )}
            </div>
        </div>
    )
}

export default Planets;