import './App.css';
import Todo from './components/Todo'
import Title from './components/Title'
import Modal from './components/Modal.jsx';

function App() {
  return (
    <div>
      <Title></Title>
        <div className='todo__wrapper'>
          <Todo 
            title="Finish FES" 
            paragraph="Code along with FES step by step"/>
          <Todo 
            title="Finish Interview Section" 
            paragraph="Finish every interview question in the next 6 weeks"/>
          <Todo 
            title="Land $100k Job" 
            paragraph="Apply to 100 jobs"/>
        </div>     
        <Modal></Modal>
    </div>
  );
}

export default App;
