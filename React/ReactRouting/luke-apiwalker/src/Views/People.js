import React from "react";

const People = props => {
    const result = props.results;
    return(
        <div className="m-5 row justify-content-center">
            <div className="col-auto text-center">
                <span className="display-3">People!</span>
            <div className="col text-start">
                {Object.keys(result).map((k, i) => 
                    <li key={i}>{k}: {result[k]}</li>
                )}
            </div>
            </div>
        </div>
    )
}

export default People;