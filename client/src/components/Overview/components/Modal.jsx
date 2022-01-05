import React from 'react';

const Modal = ({showModal, setShowModal}) => {
    return (
      < className="modal">
        {showModal ? <div>Modal</div> : null}
      </>
    )

}

export default Modal;
