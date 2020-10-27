import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './Header.css';


const Header: React.FC<any> = ({
    openSideNav,
    history
}) => {

    const logout = () => {
        localStorage.clear();
        history.replace('/login');
    }

    return (
        <div className="Header">
            <div className="Menu" onClick={openSideNav} >
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className="Logo">PUBLIC API</div>
            <div className="Nav">
                <Link to='/'>Home</Link>
                {localStorage.getItem('userId') ?
                    <>
                        <Link to='/dashboard'>Dashboard</Link>
                        <div onClick={logout} >Logout</div>
                    </>
                    :
                    <>
                        <Link to='/login'>Login</Link>
                        <Link to='/signup'>Signup</Link>
                    </>
                }
            </div>
        </div>
    )
}

export default withRouter(Header);