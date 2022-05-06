import React from "react";
import Box from "./Box";

const Display = props => {
    return (
        props.boxList.map( (val, idx) => <Box key={idx} color={val[0]} size={val[1]} /> )
    )
}

export default Display;