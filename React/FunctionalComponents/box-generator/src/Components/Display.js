import React from "react";
import Box from "./Box";

const Display = props => {
    const colorsList = props.colorsList;
    const list = [];
    for(const item in colorsList) {
        console.log(colorsList[item]);
    }
    return (
        colorsList.map( (val, idx) => <Box key={idx} color={val} /> )
    )
}

export default Display;