import './App.scss';
import Header from './components/Header';
// import TicTacToe from './components/TicTacToe';
import Construction from './components/Construction'
import Music from './components/Music'

function App() {
  return (
    <div className="App">
      <Construction/>
      <Header/>
      <Music/>
      {/* <TicTacToe/> */}

    </div>
  );
}

export default App;
