import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../App';

const NavBar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div className="flex justify-center bg-c-main sticky top-0">

            <nav className="flex text-md justify-center items-center h-16 text-white" >
                <Link to="/" className="mr-6 text-md">Home</Link>
                <Link to="/service" className="mr-6 ">Service</Link>
                {/* <Link to="/products" clLinkssName="mr-6 ">products</Link> */}
                <Link to="/blog" className="mr-6 ">Blog</Link>
                <Link to="/contact" className="mr-6 ">Contact</Link>
                {
                    loggedInUser.email ? <Link className="mr-6 " to="/login">Profile</Link> : <Link to="/login">Login</Link>
                }
            </nav>
        </div>
    );
};

export default NavBar;