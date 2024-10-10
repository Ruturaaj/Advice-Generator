//import logo from './logo.svg';
import './App.css';
import RandomAdvice from './comps/RandomAdvice';
import ParticularAdvice from './comps/ParticularAdvice';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Advice Generator</h1>
        <RandomAdvice />
      </header>
      <header className="App-header1">
        <h1>Advice Generator( Selection)</h1>
        <ParticularAdvice />
      </header>
    </div>
  );
}

export default App;

