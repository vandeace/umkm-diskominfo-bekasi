import logo from './logo.svg';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Home from './Pages/Home';
import Input from './Pages/InputData';
import Edit from './Pages/EditData';
import User from './Pages/User';
import Users from './Pages/Users';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter,
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route path='/' exact component={withRouter(Home)} />
          <Route path='/login' exact component={withRouter(Login)} />
          <Route path='/register' exact component={withRouter(Register)} />
          <Route path='/input' exact component={withRouter(Input)} />
          <Route path='/user' exact component={withRouter(User)} />
          <Route path='/users' exact component={withRouter(Users)} />
          <Route path='/edit/:id' component={withRouter(Edit)} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
