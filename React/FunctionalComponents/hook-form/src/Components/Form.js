import React, {useState} from "react";

const Form = props => {
    const [form, setForm] = useState({
        firstName : "",
        lastName : "",
        email : "",
        password : "",
        confirmPassword : ""
    });

    const [formFieldValid, setFormFieldValid] = useState({
        firstName: null,
        lastName: null,
        email: null,
        password: null,
        confirmPassword: null
    })
    const [formValid, setFormValid] = useState(false)

    const valUpdater = (key, val) => {
        setFormFieldValid({
            ...formFieldValid,
            [key] : val
        })
        allFieldsValid() === true ? setFormValid(true) : setFormValid(false);
    }
    const formHandler = (e) => {
        setForm({
            ...form,
            [e.target.name] : e.target.value
        })
        allFieldsValid() === true ? setFormValid(true) : setFormValid(false);
    }

    const allFieldsValid = () => {
        for (var prop in formFieldValid){
            console.log(formFieldValid[prop])
            if(!formFieldValid[prop]) {
                return false;
            }
        }
        return true;
    }

    // Create User
    const createUser = (e) => {
        e.preventDefault();
        if(form.password === form.confirmPassword && form.password && form.confirmPassword) {
            const newUser = {...form};
            console.log("New User Generated\n", newUser);
        }
        else{
            console.log("Passwords do not match!");
        }
    }

    // Validation Methods
    const nameValidation = (e) => {
        if(e.target.value.length >= 2) {
            valUpdater(e.target.name, true)
        }
        else{
            valUpdater(e.target.name, false)
        }
    }

    const emailValidation = (e) => {
        if(e.target.value.length >= 5) {
            valUpdater(e.target.name, true)
        }
        else{
            valUpdater(e.target.name, false)
        }
    }

    const passwordValidation = (e) => {
        if(e.target.name === "password"){
            if(e.target.value.length >= 8) {
                valUpdater(e.target.name, true)
            }
            else{
                valUpdater(e.target.name, false)
            }
        }
        else {
            if(e.target.value == form.password) {
                valUpdater(e.target.name, true)
            }
            else{
                valUpdater(e.target.name, false)
            }
        }
    }

    return(
        <div className="row mt-5 p-5">
            <form className="col-6 text-center" onSubmit={ createUser }>
                <div>
                    <div className="form-floating mb-3">
                        <input name="firstName" placeholder="text" className="form-control" type="text" onChange={ formHandler } onBlur={ nameValidation } />
                        {formFieldValid.firstName === false 
                        ? <label className="form-label text-danger">Names must be at least 2 characters</label> 
                        : <label className="form-label">First Name:</label>}
                    </div>
                </div>
                <div>
                    <div className="form-floating mb-3">
                        <input name="lastName" placeholder="text" className="form-control" type="text" onChange={ formHandler } onBlur={ nameValidation }/>
                        {formFieldValid.lastName === false 
                        ? <label className="form-label text-danger">Names must be at least 2 characters</label> 
                        : <label className="form-label">Last Name:</label>
                        }
                    </div>
                </div>
                <div>
                    <div className="form-floating mb-3">
                        <input name="email" placeholder="text" className="form-control" type="text" onChange={ formHandler } onBlur={ emailValidation } />
                        {formFieldValid.email === false 
                        ? <label className="form-label text-danger">eMail addresses must be at least 5 characters</label> 
                        : <label className="form-label">eMail:</label>
                        }
                    </div>
                </div>
                <div>
                    <div className="form-floating mb-3">
                        <input name="password" placeholder="text" className="form-control" type="text" onChange={ formHandler } onBlur={ passwordValidation } />
                        {formFieldValid.password === false 
                        ? <label className="form-label text-danger">Passwwords must be at least 8 characters</label> 
                        : <label className="form-label">Password:</label>
                        }
                    </div>
                </div>
                <div>
                    <div className="form-floating mb-3">
                        <input name="confirmPassword" placeholder="text" className="form-control" type="text" onChange={ formHandler } onBlur={ passwordValidation } />
                        {formFieldValid.confirmPassword === false 
                        ? <label className="form-label text-danger">Passwords must match!</label> 
                        : <label className="form-label">Confirm Password:</label>
                        }
                    </div>
                </div>
                <button type="submit" className="btn btn-success" disabled={!formValid} >Submit</button>
            </form>
            <div className="col-6 text-center">
                <span>First Name: {form.firstName}</span><br />
                <span>Last Name: {form.lastName}</span><br />
                <span>Email: {form.email}</span><br />
                <span>Password: {form.password}</span><br />
                <span>Confirm Password: {form.confirmPassword}</span><br />
            </div>
        </div>

    );
}
export default Form;