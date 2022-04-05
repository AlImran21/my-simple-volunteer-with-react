import React, { useState } from 'react';

const Home = () => {
    const [count, setCount] = useState (0);
    const number = 56;

    const increaseCount = () => {
        setCount (count + 1);
    }


    return (
        <div>
            <button onClick={increaseCount}>Click me</button>
            <h3>My Count : {count}</h3>
            <br />
            <h4>My Number : {number}</h4>
            <p>Multiply Count : {count * 2}</p>
            <br /> <br />
            <p>Divided Count : {count / 2 }</p>
        </div>
    );
};

export default Home;