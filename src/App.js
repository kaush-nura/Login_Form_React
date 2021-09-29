import React, { Component } from 'react'
import './App.css';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
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
 /* constructor(props){
    super(props);
    this.state={apiResponse:""}
  }

  callAPI(){
    fetch("http://localhost:3003/user")
    .then(res=>res.text())
    .then(res=>this.setState({apiResponse:res}));
  }
  
  componentWillMount(){
    this.callAPI();
  }

  {this.state.apiResponse}*/

  render() {
    return (
      <Router>
           <div className="App">
         
           {/* <Switch>
              <Route exact path='/' component={Login}></Route>
              <Route exact path='/register' component={register}></Route>
              <Route exact path='/forgetpass' component={forgetpass}></Route>
            </Switch> */}

            <p>
       
        </p>  
          </div>
       </Router>
   );
  }
}
export default App;

