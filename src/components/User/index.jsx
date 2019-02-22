import React, {useState} from 'react';

const user = () => {
    const [name, setName] = useState({n: null});
    return (
        <div>
            <h2>Alisher {name.n}</h2>
            <button 
                onClick={() => setName({n: Math.round(Math.random()*100)})}
                style={btnStyle}
            >Change</button>
        </div>
    )
}

const btnStyle = {
    backgroundColor: 'blue',
    padding: '10px 30px',
    color: '#fff'
}

export default user;