import React, {useState} from 'react';

const PersonCard = props => {
    const { firstName, lastName, hairColor } = props;
    const [state, setState] = useState({
        age: props.age
    });
    const increaseAge = () => {
        setState({
            age: state.age + 1
        });
    }
    return (
        <div>
            <h1>{lastName}, {firstName}</h1>
            <p>Age: {state.age}</p>
            <p>Hair Color: {hairColor}</p>
            <button onClick={increaseAge}>Birthday Time</button>
        </div>
    );
}

export default PersonCard;