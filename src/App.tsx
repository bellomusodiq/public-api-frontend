import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Signup from './components/Signup/Signup';
import { Switch, Route } from "react-router-dom";
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import SideNavMobile from './components/SideNav/SideNavMobile';
import Backdrop from './components/SideNav/Backdrop';

const App = () => {

  const [showNav, setShowNav] = useState<boolean>(false);

  return (
    <div className="App">
      <Header openSideNav={() => setShowNav(true)} />
      <SideNavMobile show={showNav} close={() => setShowNav(false)} />
      {showNav ? <Backdrop close={() => setShowNav(false)} /> : null}
      <Switch>
        <Route path='/signup' component={Signup} />
        <Route path='/login' component={Login} />
        <Route path='/dashboard' component={Dashboard} />
      </Switch>
    </div>
  );
}

export default App;
