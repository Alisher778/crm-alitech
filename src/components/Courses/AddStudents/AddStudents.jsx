import React from 'react';
import { Link } from 'react-router-dom';

const studentsList = (props) => {
    console.log(props.id)
    return (
        <li>
            <img src={props.img} alt={props.name} />
            <Link to={props.id}>{props.name}</Link>
            <button onClick={() => props.addToList(props.id)}>Add</button>
        </li>
    );
}

export default studentsList;