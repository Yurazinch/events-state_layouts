import logo from './logo.svg';
import './App.css';
import {Store} from './store';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Store />
      </header>
    </div>
  );
}

export default App;
