import './App.css';
import{BrowserRouter, Routes, Route } from 'react-router'
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from '.pages/Contact.jsx';


function App() {



  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
