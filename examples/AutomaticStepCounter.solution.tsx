import { useEffect, useReducer } from 'react'

interface State {
  count: number
  step: number
}

interface Action {
  type: 'STEP' | 'TICK'
  payload?: number
}

const reducer = (state: State, action: Action): State => {
  const { count, step } = state

  switch (action.type) {
    case 'STEP':
      return { ...state, step: action.payload ?? 1 }
    case 'TICK':
      return { ...state, count: count + step }
  }
}

const AutomaticStepCounterWithReducer = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0, step: 1 })
  const { count, step } = state

  useEffect(() => {
    const intervalId = setInterval(() => {
      dispatch({ type: 'TICK' })
    }, 1000)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <>
      <h2>{count}</h2>
      <input
        value={step}
        onChange={(event) =>
          dispatch({ type: 'STEP', payload: Number(event.target.value) })
        }
      />
    </>
  )
}

export default AutomaticStepCounterWithReducer
