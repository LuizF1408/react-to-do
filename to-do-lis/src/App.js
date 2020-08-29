import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import LoginScrenn from './screens/LoginScreen';
import SigUpScreen from './screens/SingUpScreen';
import TaskScreen from './screens/TasksScreen';
import './App.css';


function App() {
  return (
    <div className='container'>
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={TaskScreen}></Route>
      <Route  path="/login" component={LoginScrenn}></Route>
      <Route  path="/signup" component={SigUpScreen}></Route>
    </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
