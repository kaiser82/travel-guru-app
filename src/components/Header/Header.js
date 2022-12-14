import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png'

const Header = () => {
    return (
        <div className="navbar bg-base-100 my-2 lg:px-20">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link>News</Link></li>
                        <li><Link>Destination</Link></li>
                        <li><Link>Blog</Link></li>
                        <li><Link>Contact</Link></li>
                    </ul>
                </div>
                <Link className="btn btn-ghost normal-case text-xl"> <img className="w-24" src={logo} alt="logo" /> </Link>
            </div>
            <div className="navbar-center hidden lg:flex space-x-5">
                <div className="form-control">
                    <input type="text" placeholder="Search your Destination" className="input input-bordered" />
                </div>
                <ul className="menu menu-horizontal p-0 space-x-5">
                    <li><Link>News</Link></li>
                    <li><Link>Destination</Link></li>
                    <li><Link>Blog</Link></li>
                    <li><Link>Contact</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                <Link className="btn btn-warning">Login</Link>
            </div>
        </div>
    );
};

export default Header;