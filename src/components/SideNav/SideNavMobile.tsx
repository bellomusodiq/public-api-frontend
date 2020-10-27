import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './SideNav.css';


const SideNavMobile: React.FC<any> = ({
    history,
    show,
    close
}) => {

    return (
        <div className="SideNavMobile" style={{transform: show?'translateX(0)':'translateX(-100vw)'}} >
            <Link onClick={close} 
            className={history.location.pathname === '/' ? 'SideNavActive' : ''}
                to='/'>Home</Link>
            <Link onClick={close} 
            className={history.location.pathname === '/login' ? 'SideNavActive' : ''}
                to='/login'>Login</Link>
            <Link onClick={close} 
            className={history.location.pathname === '/signup' ? 'SideNavActive' : ''}
                to='/signup'>Signup</Link>
            <hr />
            <Link onClick={close} 
            className={history.location.pathname === '/dashboard' ? 'SideNavActive' : ''}
                to='/dashboard'>Dashboard</Link>
            <Link onClick={close} 
            className={history.location.pathname === '/dashboard/trade' ? 'SideNavActive' : ''}
                to='/dashboard/trade'>Trade</Link>
            <Link onClick={close} 
            className={history.location.pathname === '/dashboard/transactions' ? 'SideNavActive' : ''}
                to='/dashboard/transactions'>Transactions</Link>
            <Link onClick={close} 
            className={history.location.pathname === '/dashboard/accounts' ? 'SideNavActive' : ''}
                to='/dashboard/accounts'>Accounts</Link>
        </div>
    )
}

export default withRouter(SideNavMobile);