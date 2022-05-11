import React from 'react';
import { useParams } from 'react-router-dom';
const Number = (props) => {
    const {data, color, bgColor} = useParams();
    const style = {
        color: color ? color : "black",
        backgroundColor: bgColor ? bgColor : "none",
        padding: "3rem"
    }
    return (
        <h1 style={style}>{isNaN(data) ? `The word is: ${data}` : `The number is: ${data}`}</h1>
    );
}

export default Number;