import React, {useState} from 'react';
import cssClass from './User.css';

const user = () => {
    const [name, setName] = useState({n: null});
    return (
        <div>
            <h2>Alisher {name.n}</h2>
            <button 
                onClick={() => setName({n: Math.round(Math.random()*100)})}
                className={cssClass.btn}
            >Change</button>
        </div>
    )
}

export default user;