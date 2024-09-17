import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

const Modal = function Modal({ open, children }) {
const dialog = useRef()
// if we remove the if else outside the useEffect then the ref will be undefind but in
// useEffect it will be executed after the return statement when the component is rendered
useEffect(() => {
  if (open) {
    dialog.current.showModal()
  } else {
    dialog.current.close()
  }
}, [open])

  return createPortal(
    <dialog ref={dialog} className="modal">
      {open ? children : null}
    </dialog>,
    document.getElementById('modal')
  );
};

export default Modal;
