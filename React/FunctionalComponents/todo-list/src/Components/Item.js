import React from 'react';

const Item = props => {
    const bgWhite = {backgroundColor: "white"}
    const {toDoItem} = props.item;
    let {isComplete} = props.item;
    const clickHandler = (e) => {
        props.completed(e.target.checked, props.index)
    }
    return (
        <div key={props.index} className="input-group mb-3">
            <input readOnly type="text" style={bgWhite} className="form-control" value={toDoItem} aria-label="Username" aria-describedby="basic-addon1" />
            <div className="input-group-text">
                <input type="checkbox" className='form-check-input mt-0' checked={isComplete} onChange={clickHandler}/>
            </div>
        </div>
    )
}
export default Item;