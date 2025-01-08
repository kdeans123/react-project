import './App.css';
import Todo from './components/Todo'
import Title from './components/Title'
import Modal from './components/Modal.jsx';
import Counter from './components/Counter.jsx'
import React, { useState } from 'react';


function App() {
  const [showModal, setShowModal] = useState(false)

  function onTodoDelete() {
    setShowModal(true)
    console.log('onTodoDelete()')
  }

  function cancelModal() {
    setShowModal(false)
  }

  function confirmModal() {
    setShowModal(false)
  }


  return (
    <div>
      <Title></Title>
        <div className='todo__wrapper'>
          <Todo onTodoDelete={onTodoDelete} title="Finish FES"/>
          <Todo onTodoDelete={onTodoDelete} title="Finish Interview Section"/>
          <Todo onTodoDelete={onTodoDelete} title="Land $100k Job"/>
        </div>     
        {showModal && <Modal cancelModal={cancelModal} confirmModal={confirmModal} title="Confirm delete?"/>}
    </div>
  );
}

export default App;
