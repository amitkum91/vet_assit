import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UserHome from './Components/UserHome';
import Home from './Components/Home'

function App() {
  return (
    <div>
       <Router>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/UserHome" exact>
            <UserHome />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
