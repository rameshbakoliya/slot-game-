import React, { useState } from 'react'
import index from "./index.css"




const Appc = () => {
    const state = useState();
    const [count, setCount] = useState(1);


    const IncNum = () => {
        setCount(count + 1);

    };

    const DecNum = () => {
        setCount(count - 1)
    }
    return (
        <>
            <div style={{ textAlign: "center" }}>
                <h1>{count}</h1>
                <button onClick={IncNum}>Incerment</button>

                <button onClick={DecNum}>Decement</button>
                <hr />
            </div>
        </>
    )
}


export default Appc;
