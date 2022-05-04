import React from 'react';

const PersonCard = props => {
    const { firstName, lastName, hairColor, age } = props;
    return (
        <div>
            <h1>{lastName}, {firstName}</h1>
            <p>Age: {age}</p>
            <p>Hair Color: {hairColor}</p>
        </div>
    );
}

export default PersonCard;