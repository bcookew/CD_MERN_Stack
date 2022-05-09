import React from 'react';

const Form = props => {
    const handleSubmit = (e) => {
        e.preventDefault();
        props.addToDo(e.target[0].value);
    };
    return (
        <form onSubmit={handleSubmit}>
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="New To-Do" aria-label="New To-Do" aria-describedby="basic-addon1" />
                <input type="submit" className='btn btn-primary' />
            </div>
        </form>
    )
}
export default Form;