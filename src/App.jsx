import './App.scss';
import { ChessBoard } from './ChessBoard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <main>
        <ChessBoard rowCount={8} colCount={8} />
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
