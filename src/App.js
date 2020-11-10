import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

function App() {
  const [isVisible, setVisibility] = useState(true)
  return (
    <div className="App">
      <header className="App-header">
        <img style={{display: isVisible ? 'block' : 'none'}} src={logo} className="App-logo" alt="logo" />
        <p onClick={()=>{setVisibility(!isVisible)}}>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
