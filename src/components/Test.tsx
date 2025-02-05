import { createSignal } from "solid-js";

export function Counter(){
    const [counter,setCounter]=createSignal(0)

    return (
        <>
            <h1>SolidJs Counter Test</h1>
            <p>{counter()}</p>
            <button onClick={() => setCounter(counter()+1)}>+</button>
            <button onClick={() => setCounter(counter()-1)}>-</button>
        </>
    )
}