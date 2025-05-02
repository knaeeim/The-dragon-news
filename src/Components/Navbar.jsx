import React, { use } from "react";
import { Link, NavLink } from "react-router";
import userIcon from "../assets/user.png";
import { AuthContext } from "../Provider/Context";
import toast from "react-hot-toast";
const Navbar = () => {
    const { user, logOutUser } = use(AuthContext);

    const handleLogout = () => {
        logOutUser()
            .then(() => {
            })
            .catch(() => {
            });
        toast.success("Logout Successfully");
    };
    return (
        <div className="flex justify-between items-center">
            <div>
                {user && (
                    <p className="md:text-md text-sm font-bold">
                        Welcome to{" "}
                        <span className="text-secondary">
                            {user.displayName}
                        </span>
                    </p>
                )}
            </div>
            <div className="nav md:flex gap-5 text-accent font-bold hidden">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/career">Career</NavLink>
            </div>
            <div className="login-btn flex items-center gap-3">
                {user?.photoURL ? (
                    <img
                        src={user?.photoURL}
                        alt="user"
                        className="w-10 h-10 rounded-full object-cover"
                    />
                ) : (
                    <img
                        src={userIcon}
                        alt="user"
                        className="w-10 h-10 rounded-full"
                    />
                )}
                {user ? (
                    <Link
                        to="/auth/login"
                        onClick={handleLogout}
                        className="btn btn-primary md:px-10">
                        LogOut
                    </Link>
                ) : (
                    <Link to="/auth/login" className="btn btn-primary md:px-10">
                        Login
                    </Link>
                )}
            </div>
        </div>
    );
};

export default Navbar;
