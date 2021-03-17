import { useCallback, useMemo, useReducer, useRef } from 'react'

// Function that doesn't need props or state is safe to place outside of
// component, which makes it constant.
const constantFunction = () => {}

// Just a contant value.
const constantValue = 'foobar'

const ComponentWithTools = () => {
  // Memoized callback which will only change when the dependencies change.
  const memoizedCallback = useCallback(() => {}, [])

  // Memoized value which will only change when the dependencies change.
  const memoizedValue = useMemo(() => {}, [])

  // Mutatable ref.
  const mutatableRef = useRef()

  // The ultimate cheat mode! Decouple state from actions.
  const [state, dispatch] = useReducer(reducer, initialState)

  return null
}

export default ComponentWithTools
