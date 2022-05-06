import React from "react";

const Box = props => {
    const style = {
        width: props.size+"px",
        height: props.size+"px",
        backgroundColor:props.color
    }
    return (
        <div className="m-2" style={style}></div>
    )
}

export default Box;