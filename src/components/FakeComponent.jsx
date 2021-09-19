import * as React from 'react'
import { useContextSelector } from 'use-context-selector'
import { counterContext } from '../contexts/CounterContext'

function FakeComponent() {
    const counter1 = useContextSelector(counterContext, ({ counter }) => counter.counter1)
    const setCounter = useContextSelector(counterContext, ({ setCounter }) => setCounter)
    const increment = () => setCounter(prevState => ({
        ...prevState,
        counter1: prevState.counter1 + 1
    }))
    
    console.log('Fake Component rendered')

    return (
        <div>
            <h1>FakeComponent 1</h1>
            <h1>{counter1}</h1>
            <button onClick={increment}>Increment</button>
        </div>
    )
}

export default FakeComponent

