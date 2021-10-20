import './App.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
import { createContext, useState } from 'react';
import Login from './components/Login/Login';

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <div className="App">
          <Switch>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/">
            <Home></Home>
            </Route>
          </Switch>
        </div>

      </Router>
    </UserContext.Provider>
  );
}


export default App;
