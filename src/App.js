import { Container } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Header } from './components/Header/Header.jsx'
import {Characters} from './pages/Characters/Characters'
import {Episodes} from './pages/Episodes/Episodes'
import {Locations} from './pages/Locations/Locations'

import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Container>
          <Switch>
            <Route exact path="/" component={Characters}/>
            <Route path="/episodes" component={Episodes}/>
            <Route path="/locations" component={Locations}/>
          </Switch>
        </Container>
      </Router>
    </div>
  );
}

export default App;
