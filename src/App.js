import arrow from './arrow.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={arrow} className="App-logo" alt="logo" />
        <p>
          Let's Gooo!!!
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
