import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import UserHome from './Components/UserHome';
import PetRegister from './Components/PetRegister';
import PhysicianAppointment from './Components/PhysicianAppointment';
import PhysicianHomePage from './Components/PhysicianHomePage';
import Home from './Components/Home'
import Register from './Components/Register'
import BookAppointment from './Components/BookAppointment';
import RecordApmt from './Components/recordApmt';

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
          <Route path="/Register" exact>
            <Register />
          </Route>
          <Route path="/PetRegister" exact>
            <PetRegister />
          </Route>
          <Route path="/PhysicianAppointment" exact>
            <PhysicianAppointment />
          </Route>
          <Route path="/PhysicianHomePage" exact>
            <PhysicianHomePage />
          </Route>
          <Route path="/bookApmt" exact>
            <BookAppointment />
          </Route>
          <Route path="/rcrdApmt" exact>
            <RecordApmt />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
