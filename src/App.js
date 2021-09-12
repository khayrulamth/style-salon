import './App.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  // Switch,
  // Route,
  // Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Home></Home>
      </div>
    </Router>
  );
}


export default App;
