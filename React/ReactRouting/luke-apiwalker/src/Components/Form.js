import React, {useEffect, useState} from 'react';
import axios from 'axios';

const Form = props => {
    const [loaded, setLoaded] = useState(false);
    const [endpoints, setEndpoints] = useState();
    const [form, setForm] = useState({
        endpointName:"people",
        idNumber:"1"
    });

    useEffect(() => {
        axios.get("https://swapi.dev/api/").then(response => {
            console.log(response.data);
            setEndpoints(response.data);
            setLoaded(true);
        })
    }, []);

    const onChangeHandler = e => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.get(endpoints[form.endpointName]+form.idNumber).then(response => {
            props.nav(form.endpointName, response.data)
        })
        .catch(rejected => {
            console.log(rejected)
            props.nav("error")
        })
    }
    
    return loaded ? (
        <div className="row justify-content-center">
            <div className="col text-center">
                <h2 className="display-2">This is the Form!</h2>
            </div>
            <form onSubmit={onSubmitHandler}>
                <div className="row justify-content-center g-3 align-items-center">
                    <div className="col-md-2">
                        <div className="form-floating">
                            <select name='endpointName' className='form-select' onChange={(e) => onChangeHandler(e)}>
                                {Object.keys(endpoints).map((val , idx) =>
                                    <option key={idx} value={val}>{val.replace(/^\w/, (c) => c.toUpperCase())}</option>
                                )}
                            </select>
                            <label>Dataset</label>
                        </div>
                    </div>
                    <div className="col-2">
                        <div className="form-floating">
                            <input name='idNumber' type="number" placeholder='Text' className='form-control' onChange={(e) => onChangeHandler(e)} min="1" step="1"/>
                            <label>Id</label>
                        </div>
                    </div>
                    <div className="col-auto">
                        <input type="submit" className='btn btn-info btn-lg' />
                    </div>
                </div>
            </form>
        </div>

    ) 
    : (
        <div className="row justify-content-center m-5">
            <div className="col-auto">
                <span className="display-3">Loading...</span>
            </div>
        </div>
    )
}

export default Form;