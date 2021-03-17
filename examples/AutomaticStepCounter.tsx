import { useEffect, useState } from 'react'

/**
 * Codesandbox available at:
 * https://ul5yl.csb.app/automatic-step-counter
 *
 * Solution found at: ./AutomaticStepCounter.solution.tsx
 */
const AutomaticStepCounter = () => {
  const [count, setCount] = useState(0)
  const [step, setStep] = useState(1)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount(count + step)
    }, 1000)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <>
      <h2>{count}</h2>
      <input
        value={step}
        onChange={(event) => setStep(Number(event.target.value))}
      />
    </>
  )
}

export default AutomaticStepCounter
