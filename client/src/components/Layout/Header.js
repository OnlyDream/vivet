import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from '../GoogleAuth';


import "./Header.scss";
import SearchBar from './SearchBar/SearchBar';

const Header = (props) => {
    return (
        <nav className="navbar">
            <div className="navbar__items">
                <div className="navbar__section">
                    <div className="navbar__logo">
                        <Link to="/" className="navbar__logo--text">
                            vivet
                    </Link>
                    </div>
                    <ul className="navbar__menu">
                        <li className="navbar__menu-item">
                            <Link to="/" className="navbar__menu-item--link">
                                Following
                        </Link>
                        </li>
                        <li className="navbar__menu-item">
                            <Link to="/" className="navbar__menu-item--link">
                                Browse
                        </Link>
                        </li>
                    </ul>

                </div>
                <div className="navbar__section">
                    <div className="navbar__search">
                        <SearchBar />
                    </div>
                </div>
                <div className="navbar__section">
                    <div className="navbar__user"> <GoogleAuth /></div>
                </div>

            </div>
        </nav>
    );
}

export default Header;