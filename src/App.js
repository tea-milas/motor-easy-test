import './App.css';
import Display from './components/Display/Display';
import Navigation from './components/Navigation/Navigation';
require('dotenv').config();

function App() {
  return (
    <div className="App">
      <Navigation />
      <Display />
    </div>
  );
}

export default App;
