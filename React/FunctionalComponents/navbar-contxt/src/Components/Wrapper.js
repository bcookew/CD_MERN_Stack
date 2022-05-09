import React, { useState } from 'react';
import MyContext from './MyContext';

const Wrapper = props => {
    const [userName, setUserName] = useState("")
    return (
        <div className="container">
            <MyContext.Provider value={{userName, setUserName}}>
                {props.children}
            </MyContext.Provider>
        </div>
        
    )
}

export default Wrapper;