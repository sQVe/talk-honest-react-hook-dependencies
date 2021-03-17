import { useEffect, useState } from 'react'

/**
 * Codesandbox available at:
 * https://ul5yl.csb.app/automatic-counter
 *
 * Solutions found at: ./AutomaticCounter.solutions.tsx
 */
const AutomaticCounter = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount(count + 1)
    }, 1000)

    return () => clearInterval(intervalId)
  }, [])

  return <h2>{count}</h2>
}

export default AutomaticCounter
