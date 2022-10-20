import React from 'react';
import {Link} from 'react-router-dom';

function Navigation() {
    return (
        <nav className="StoreApp_nav">
            <Link to="/">HomePage </Link>
            <Link to="../stores">StoresPage </Link>
            <Link to="../order">OrderPage </Link>
        </nav>
    )
}
export default Navigation;