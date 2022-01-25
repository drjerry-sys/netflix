import './App.css';
import { Route, Switch } from 'react-router-dom';
import { Home, Navbar, Watch, Register, Login } from './components';

function App() {
  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;