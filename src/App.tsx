import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Page2 from './pages/Page2';
import Page1 from './pages/Page1';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Page1} />
        <Route path="/Page2" exact component={Page2} />
      </Switch>
    </Router>
  );
}

export default App;