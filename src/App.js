import logo from "./logo.png";
import './App.css';
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
        <img src= {logo} className="App-logo img-fluid" alt="logo" />
      </header>
      <p>
        <Dictionary />
      </p>
      <footer className="App-footer">
        <small>
        This project was coded by <a href="https://github.com/knd-codes/dictionary-project"> Krista Gonzalez </a>
         and hosted on <a href="https://fervent-colden-c5d26b.netlify.app">Netlify</a>.
        </small>
      </footer>
    </div>
    </div>
  );
}


