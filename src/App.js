import logo from './logo.svg';
import './App.css';
import { MyComponent } from './MyComponent';
import {useState} from 'react';

function App() {

  const onBtnClick = () => {
    
    console.log('btn clicked!')
    setCount(count + 1)
  }

  const [count, setCount] = useState(0)

  

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
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
        <MyComponent title = 'React' onButtonClick = {onBtnClick} count = {count}  />
      </header>
    </div>
  );
}

export default App;
