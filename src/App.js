import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import Board from './components/Board';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <Board></Board>
        </p>
      </header>
    </div>
  );
}

export default App;
