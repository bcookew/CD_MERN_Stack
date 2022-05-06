import React, {useState} from "react";

const Form = props => {
    const colorsList = ["green","purple","red", "blue", "yellow", "pink", "black", "white", "whitesmoke", "orange"];
    const [color, setColor] = useState("");
    const inputHandler = e => {setColor(e.target.value.toLowerCase())}
    const submit = (e) => {
        e.preventDefault();
        console.log(e);
        colorsList.includes(color) ? props.addColors(color) : alert("color not in colors list");
    }
    return (
        <div className="col-4 m-5">
            <form onSubmit={submit}>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" placeholder="Color Name" onChange={inputHandler}/>
                    <label className="form-label">Color Name</label>
                </div>
                <button className="btn btn-warning">Submit</button>
            </form>
        </div>
    )
}

export default Form;