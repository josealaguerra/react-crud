import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <User name="Pedro" age={21} email="josealaguerra@gmail.com" />
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
      </header>
    </div>
  );
}

const User = (props)=>{
  return (<div>
            <h1>{props.name}</h1>
            <h1>{props.age}</h1>
            <h1>{props.email}</h1>
  </div>);
};






export default App;
