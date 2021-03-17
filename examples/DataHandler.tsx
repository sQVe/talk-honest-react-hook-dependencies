import { useEffect } from 'react'

interface DataHandlerProps {
  data: {
    foo: number
    bar: number
    baz: number
  }
  visible: boolean
}

/**
 * Solution found at: ./DataHandler.solution.tsx
 */
const DataHandler = ({ data, visible }: DataHandlerProps) => {
  useEffect(() => {
    console.log(Object.values(data))
  }, [visible])

  return <h2>{visible ? 'Visible' : 'Hidden'}</h2>
}

export default DataHandler
