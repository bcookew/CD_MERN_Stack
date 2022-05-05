import React, {useState} from "react";

const Form = props => {
    const style = {
        display:"flex",
        justifyContent:"center",
        marginTop:"10%"
    }
    const padding = {
        padding:"50px"
    }
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const createUser = (e) => {
        e.preventDefault();
        if(password === confirmPassword && password && confirmPassword) {
            const newUser = {firstName, lastName, email, password};
            console.log("New User Generated\n", newUser);
        }
        else{
            console.log("Passwords do not match!");
        }
    }

    return(
        <div style={style}>
            <form style={padding} onSubmit={ createUser }>
                <div>
                    <label>First Name:</label> 
                    <input type="text" onChange={ (e) => setFirstName(e.target.value) } />
                </div>
                <div>
                    <label>Last Name:</label> 
                    <input type="text" onChange={ (e) => setLastName(e.target.value) } />
                </div>
                <div>
                    <label>Email Address: </label> 
                    <input type="text" onChange={ (e) => setEmail(e.target.value) } />
                </div>
                <div>
                    <label>Password: </label>
                    <input type="text" onChange={ (e) => setPassword(e.target.value) } />
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="text" onChange={ (e) => setConfirmPassword(e.target.value) } />
                </div>
                <button type="submit">Submit</button>
            </form>
            <div style={padding}>
                <span>First Name: {firstName}</span><br />
                <span>Last Name: {lastName}</span><br />
                <span>Email: {email}</span><br />
                <span>Password: {password}</span><br />
                <span>Confirm Password: {confirmPassword}</span><br />
            </div>
        </div>

    );
}
export default Form;