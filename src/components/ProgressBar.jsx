import { useEffect, useState } from "react"

export default function ProgressBar ({timer}) {
// now progressbar will be executed every 10 seconds instead of DeleteConfirmation component as it is now moved to separate file
const [ remainingTime, setRemainingTime ] = useState(timer)
  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTime((prevTime) => {
        return prevTime - 10
      })
    }, 10)
    return (() => {
      console.log('==TIMER CLEAN UP===')
      clearInterval(timer)
    })
  }, [])
  return (
    <progress value={remainingTime} max={timer}/>
  )
}