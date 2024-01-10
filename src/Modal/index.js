import React from 'react';
import ReactDOM from 'react-dom';
import "./Modal.css"

function Modal({ children }) {
  return ReactDOM.createPortal(
    <div className="ModalBack">
        {/* <span className='titulo'>Titulo</span>
      <div className='hijo'>{children}</div> */}
      {children}
    </div>,
    document.getElementById('modal')
  );
}

export { Modal };