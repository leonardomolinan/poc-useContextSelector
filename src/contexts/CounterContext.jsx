import * as React from 'react'
import { createContext } from 'use-context-selector'

export const counterContext = createContext(null)

export function CounterProvider({ children }) {
    const [counter, setCounter] = React.useState({ counter1: 1, counter2: 1 })

    React.useEffect(() => {
        console.log('Counter 1 updated')
    }, [counter.counter1])

    React.useEffect(() => {
        console.log('Counter 2 updated')
    }, [counter.counter2])
    
    return (
        <counterContext.Provider value={{ counter, setCounter }}>
            {children}
        </counterContext.Provider>
    )
}
