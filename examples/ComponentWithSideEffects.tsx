import { useEffect } from 'react'

const ComponentWithSideEffects = () => {
  // This side effect code is here to synchronize the state of the world with
  // the state of this component.
  useEffect(() => {
    return function cleanup() {}
  }, [when, any, ofThese, change])

  // This side effect can never get stale because it legitimately has no
  // dependencies.
  useEffect(() => {}, [])

  // This side effect will re-run on every single time this component is
  // re-rendered to make sure that what it does is never stale.
  useEffect(() => {})

  return null
}

export default ComponentWithSideEffects
