import React from 'react';
import { Link, withRouter } from 'react-router-dom';

type Props = {
    history: any
}


const SideNav: React.FC<Props> = ({
    history
}) => {
    return (
        <div className="SideNav">
            <Link className={history.location.pathname === '/dashboard' ? 'SideNavActive' : ''}
                to='/dashboard'>Home</Link>
            <Link className={history.location.pathname === '/dashboard/trade' ? 'SideNavActive' : ''}
                to='/dashboard/trade'>Trade</Link>
            <Link className={history.location.pathname === '/dashboard/transactions' ? 'SideNavActive' : ''}
                to='/dashboard/transactions'>Transactions</Link>
            <Link className={history.location.pathname === '/dashboard/accounts' ? 'SideNavActive' : ''}
                to='/dashboard/accounts'>Accounts</Link>
        </div>
    )
}

export default withRouter(SideNav);