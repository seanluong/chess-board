import './App.scss';
import { ChessBoard } from './ChessBoard';
import { Header } from './Header';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <ChessBoard rowCount={8} colCount={8} />
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
