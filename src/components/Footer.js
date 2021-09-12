import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer >
            <div className="grid gap-3 grid-cols-1 text-white bg-indigo-700 py-16 md:grid-cols-3 space-around px-8">
                <div className="logo text-xl md:text-2xl "><Link className="border pb-1 px-4 " to="/">style Salon</Link></div>
                <div className="copyright mx-auto text-sm">logo © {new Date().getFullYear()} All rights reserved.</div>
                <div className="socilLogo text-xl flex cursor-pointer space-x-2 space-around mx-auto">
                    <Link to="/"><FaFacebook /></Link>
                    <Link to="/"><FaInstagram /></Link>
                    <Link to="/"><FaTwitter /></Link>
                    <Link to="/"><FaYoutube /></Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;