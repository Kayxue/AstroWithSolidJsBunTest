import { createSignal, onCleanup } from "solid-js";

export function Counter() {
    const [counter, setCounter] = createSignal(0)
    const oddCounter = () => counter() * 2
    const [timeCount, setTimeCount] = createSignal(0)

    const timer = setInterval(() => setTimeCount(timeCount() + 1), 1000)
    onCleanup(() => clearInterval(timer))

    return (
        <>
            <p>You have opened this page for {timeCount()} second.</p>
            <p>Counter: {counter()}</p>
            <p>Even Counter: {oddCounter()}</p>
            <button onClick={() => setCounter(counter() + 1)}>+</button>
            <button onClick={() => setCounter(counter() - 1)}>-</button>
        </>
    )
}