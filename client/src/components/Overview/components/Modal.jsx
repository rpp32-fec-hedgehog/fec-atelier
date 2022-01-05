import React from 'react';
import Modal from 'react-modal';

const ExpandedView = ({showModal, setShowModal}) => {
    return (
      <>
        {showModal ? <div className="modal">Modal</div> : null}
      </>
    )
}

export default Modal;
