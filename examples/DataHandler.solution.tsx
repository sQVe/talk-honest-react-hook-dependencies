import { useEffect, useRef } from 'react'

interface DataHandlerProps {
  data: {
    foo: number
    bar: number
    baz: number
  }
  visible: boolean
}

export const DataHandlerWithDataRef = ({ data, visible }: DataHandlerProps) => {
  const dataRef = useRef(data)

  // Set current on mutatable ref object to our data on every render.
  useEffect(() => {
    dataRef.current = data
  })

  useEffect(() => {
    console.log(Object.values(dataRef.current.baz))
  }, [visible])

  return <h2>{visible ? 'Visible' : 'Hidden'}</h2>
}

export default DataHandlerWithDataRef
