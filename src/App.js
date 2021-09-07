
import React, { Component } from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import Login from './Component/login';
import register from './Component/register';
import forgetpass from './Component/forgetpass';
/*
function App() {
  return (
    <div className="App">
      <Login />
    </div>
  );
}
*/

class App extends Component {
  render() {
    return (
       <Router>
           <div className="App">
         
            <Switch>
              <Route exact path='/' component={Login}></Route>
              <Route exact path='/register' component={register}></Route>
              <Route exact path='/forgetpass' component={forgetpass}></Route>
            </Switch>
          </div>
       </Router>
   );
  }
}
export default App;