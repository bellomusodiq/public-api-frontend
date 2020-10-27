import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Accounts from './Accounts/Accounts';
import './Dashboard.css';
import Home from './Home/Home';
import SideNav from './SideNav/SideNav';
import Trade from './Trade/Trade';
import Transaction from './Transactions/Transactions';


const Dashboard = () => {

    return (
        <div className="Dashboard">
            <SideNav />
            <div className="DashboardMain">
                <Switch>
                    <Route path='/dashboard/trade' component={Trade} />
                    <Route path='/dashboard/transactions' component={Transaction} />
                    <Route path='/dashboard/accounts' component={Accounts} />
                    <Route path='/dashboard' exact component={Home} />
                </Switch>
            </div>
        </div>
    )
}

export default Dashboard;