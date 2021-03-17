import { useEffect, useRef, useState } from 'react'

export const AutomaticCounterWithSetCallback = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((c) => c + 1)
    }, 1000)

    return () => clearInterval(intervalId)
  }, [])

  return <>{count}</>
}

export const AutomaticCounterWithRef = () => {
  const [count, setCount] = useState(0)
  const countRef = useRef(count)

  useEffect(() => {
    countRef.current = count
  }, [count])

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount(countRef.current + 1)
    }, 1000)

    return () => clearInterval(intervalId)
  }, [])

  return <>{count}</>
}
