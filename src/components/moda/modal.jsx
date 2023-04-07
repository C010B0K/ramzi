import React, { useState } from 'react';
import './modal.scss'

const Modal = () => {
  const [modalVisible, setModalVisible] = useState(false);


  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <>
      <div className={`modal ${modalVisible ? 'modal--bg' : ''}`} onClick={closeModal}>
        <div className={`modal__content ${modalVisible ? 'modal__content--show' : ''}`}>
          <button className="modal__close" onClick={closeModal}>
            Close
          </button>
        </div>
      </div>

    </>
  );
};

export default Modal;
