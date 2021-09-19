import * as React from 'react'
import { counterContext } from '../contexts/CounterContext'
import { useContextSelector } from 'use-context-selector'

function FakeComponent2() {
    const counter2 = useContextSelector(counterContext, ({ counter }) => counter.counter2)
    const setCounter = useContextSelector(counterContext, ({ setCounter }) => setCounter)
    const increment = () => setCounter(prevState => ({
        ...prevState,
        counter2: prevState.counter2 + 1
    }))

        console.log('Fake Component 2 rendered')

    return (
        <div>
            <h1>FakeComponent 2</h1>
            <h1>{counter2}</h1>
            <button onClick={increment}>Increment</button>
        </div>
    )
}

export default FakeComponent2