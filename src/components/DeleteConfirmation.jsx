import { useEffect } from "react";
import ProgressBar from "./ProgressBar";

const TIMER = 3000

export default function DeleteConfirmation({ onConfirm, onCancel }) {
  useEffect(() => {
    console.log('==TIMER===')
    const timer = setTimeout(() => {
      onConfirm()
    }, TIMER);
    // clean up
    // executed before the component is removed/ before the above part of the function is executed
    return (() => {
      console.log('==TIMER CLEAN UP===')
      clearTimeout(timer)
    })
  }, [])
  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        <button onClick={onCancel} className="button-text">
          No
        </button>
        <button onClick={onConfirm} className="button">
          Yes
        </button>
      </div>
     <ProgressBar timer={TIMER}/>
    </div>
  );
}
