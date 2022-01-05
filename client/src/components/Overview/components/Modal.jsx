import React from 'react';


const ExpandedView = ({showModal, setShowModal}) => {
    return (
      <>
        {showModal ? <Modal className="modal">Modal</Modal> : null}
      </>
    )
}

export default ExpandedView;
