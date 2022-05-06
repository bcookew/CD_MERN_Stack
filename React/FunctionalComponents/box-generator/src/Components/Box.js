import React from "react";

const Box = props => {
    const style = {
        width: "100px",
        height: "100px",
        backgroundColor:props.color
    }

    return (
        <div className="m-2" style={style}></div>
    )
}

export default Box;