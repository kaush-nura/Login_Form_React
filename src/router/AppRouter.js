import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from '../Component/header';
import addvehicle from '../Component/vehicleForm';
import updatevehicle from '../Component/vehicleupdate';
import VehicleList from '../Component/vehiclelist';
import Login from '../Component/login';


const AppRouter = () => {


  return (
    <BrowserRouter>
      <div>
        <div className="main-content">
          <Switch>
            <Route component={Login} exact path="/"  />
            <Route component={Header} exact path="/header"/>
            <Route component={VehicleList} path="/vehiclelist"/>
            <Route component={addvehicle} path="/add"/>
            <Route component={updatevehicle} path="/upd"/>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;