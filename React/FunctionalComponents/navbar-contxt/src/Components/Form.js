import React, { useContext } from 'react';
import MyContext from './MyContext';

const Form = props => {
    const {userName, setUserName} = useContext(MyContext);
    return (
        <div className="row m-5 justify-content-center">
            <div className="col-6 m-5">
                <h1>This is the Form!</h1>
                <div className="form-floating">
                    <input type="text" className='form-control' name="name" placeholder='Name' onChange={(e) => setUserName(e.target.value)} />
                    <label htmlFor="name">Name</label>
                </div>
            </div>
        </div>
    )
}

export default Form;