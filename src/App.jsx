import './App.css';
import Todo from './components/Todo'
import Title from './components/Title'
import Modal from './components/Modal.jsx';
import Counter from './components/Counter.jsx'
import React, { useState } from 'react';


function App() {
  const [showModal, setShowModal] = useState(false)


  return (
    <div>
      <Title></Title>
        <div className='todo__wrapper'>
          <Todo onTodoDelete={onTodoDelete} title="Finish FES"/>
          <Todo onTodoDelete={onTodoDelete} title="Finish Interview Section"/>
          <Todo onTodoDelete={onTodoDelete} title="Land $100k Job"/>
        </div>     
        {showModal && <Modal title="Confirm delete?"/>}
    </div>
  );
}

export default App;
