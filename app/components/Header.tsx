'use client'
import React from 'react';
import Link from 'next/link';
import { useAuthContext } from '../context/AuthContext';
import signout from '../firebase/auth/signout';

const Header: React.FC = () => {
    const {user} = useAuthContext();
    
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        {/* {user ?
                        <> */}
                        <li className="nav-item">
                            <Link className="nav-link" href="/">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/generalfeed">
                                General Feed
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/find">
                                Find
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" onClick={signout} href="/signin">
                                Sign Out
                            </Link>
                        </li>
                        {/* </> : */}
                        <>
                        <li className="nav-item">
                            <Link className="nav-link" href="/signup">
                                Sign Up
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/signin">
                                Sign In
                            </Link>
                        </li>
                        </>
                        {/* } */}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;
