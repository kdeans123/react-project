import './App.css';
import Todo from './components/Todo'
import Title from './components/Title'
import Modal from './components/Modal.jsx';

function App() {
  return (
    <div>
      <Title></Title>
        <div className='todo__wrapper'>
          <Todo title="Finish FES"/>
          <Todo title="Finish Interview Section"/>
          <Todo title="Land $100k Job"/>
        </div>     
        <Modal></Modal>
    </div>
  );
}

export default App;
