import logo from './logo.svg';
import './App.css';
import FlitWelcome from './components/flitWelcome.js'


/**function FlitWelcome() {
  return(
    <div className="welcome">
      <h1>Welcome to Flit AI.</h1>
      <p>Tell me a date, I will make you flit from one best place to another.</p>
    </div>
  );
}*/

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <FlitWelcome/>
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
