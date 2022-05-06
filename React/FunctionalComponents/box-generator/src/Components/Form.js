import React, {useState} from "react";

const Form = props => {
    const colorsList = ["green","purple","red", "blue", "yellow", "pink", "black", "white", "whitesmoke", "orange"];
    const [color, setColor] = useState("");
    const [size, setSize] = useState("");
    const colorHandler = e => {setColor(e.target.value.toLowerCase())}
    const sizeHandler = e => {setSize(e.target.value)}
    const submit = (e) => {
        e.preventDefault();
        colorsList.includes(color) ? props.addColors([color,size]) : alert("color not in colors list");
        e.target[0].value = "";
        e.target[1].value = "";
    }
    return (
        <div className="col-4 m-5">
            <form onSubmit={submit}>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" placeholder="Color Name" onChange={colorHandler}/>
                    <label className="form-label">Color Name</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="number" className="form-control" placeholder="Size" onChange={sizeHandler}/>
                    <label className="form-label">Size</label>
                </div>
                <button className="btn btn-warning">Submit</button>
            </form>
        </div>
    )
}

export default Form;