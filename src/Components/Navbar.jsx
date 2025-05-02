import React from "react";
import { Link, NavLink } from "react-router";
import userIcon from "../assets/user.png";
const Navbar = () => {
    return (
        <div className="flex justify-between items-center">
            <div></div>
            <div className="nav flex gap-5 text-accent font-bold">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/career">Career</NavLink>
            </div>
            <div className="login-btn flex items-center gap-3">
                <img src={userIcon} alt="user Image" />
                <Link to="/auth/login" className="btn btn-primary px-10">Login</Link>
            </div>
        </div>
    );
};

export default Navbar;
