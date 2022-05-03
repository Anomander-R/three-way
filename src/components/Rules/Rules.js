import React, {Fragment, useState} from 'react';
import {StyledButton} from '../.'
import Modal from 'react-modal';

Modal.setAppElement('#root');

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const Rules = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }
  return (
      <Fragment>
        <StyledButton onClick={openModal} style={{background: '#fff', opacity: 0.5, color: '#282c34'}}>Rules</StyledButton>
      {/* <button onClick={openModal}>Rules</button> */}
  
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Rules Modal"
        >
          <div style={{width: '450px'}}><h3>Game Rules</h3><p>Rock breaks scissors and therefore rock wins over scissors. Rock loses against paper.
          <br/><br/>Scissors cut paper therefore scissors win over paper. Scissors lose against rock.
          <br/><br/>Paper covers rock therefore paper wins over rock. Paper loses against scissors.
          <br/><br/>If the player and computer make the same selection, there is a tie.</p></div>
      </Modal>
      </Fragment>
    )
}

export default Rules