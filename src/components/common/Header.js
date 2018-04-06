import React from 'react';
import { Link } from 'react-router';
import './Header.scss';
import logoImg from '../../assets/images/getlinks_full_logo.png';

class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <div className="logo text-center">
                    <img src={logoImg} alt="Getlinks"/>
                </div>
                <ul className="row nav justify-content-center">
                    <li className="nav-item">
                        <Link to="/home" className="nav-link" activeClassName="active">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/companies" className="nav-link" activeClassName="active">Find Jobs</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/categories" className="nav-link" activeClassName="active">Categories</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" activeClassName="active" to='/about'>About</Link>
                    </li>
                </ul>
            </div>
        );
    }
}
export default Header;
