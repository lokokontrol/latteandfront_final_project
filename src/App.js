import logo from './logo.svg';
import './App.css';
import apiClient from 'utils/apiClient.js';

function App() {

  const user = {
    "name": "david",
    "job": "david"
  };

  apiClient.get("https://reqres.in/api/users/2").then((users) => console.log(users.data));
  apiClient.post("https://reqres.in/api/users", user).then((data) => console.log(data));

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
      </header>
    </div>
  );
}

export default App;
