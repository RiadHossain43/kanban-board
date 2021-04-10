import {BrowserRouter,Route,Switch,Redirect} from 'react-router-dom'
import Login from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import Boards from './components/boards/Boards'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/signin' component={Login} />
        <Route path='/signup' component={SignUp} />
        <Route path='/boards' component={Boards} />
        <Redirect path='/' to='/signin' />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
