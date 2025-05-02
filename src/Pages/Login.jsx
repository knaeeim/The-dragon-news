import React, { useContext } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Provider/Context";

const Login = () => {

    const { logInUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;

        // form values
        const email = form.email.value;
        const password = form.password.value;

        logInUser(email, password)
        .then((result) => {
            const user = result.user;
            console.log(user.displayName, "has been logged in successfully");
        })
        .catch((error) => {
            console.log(error, "has been caught successfully");
        })

        navigate("/")
    }

    return (
        <div className="flex justify-center items-center min-h-[calc(100vh-200px)]">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                <h1 className="font-bold text-2xl text-center">Login Your Account</h1>
                <div className="card-body">
                    <form onSubmit={handleLogin} className="fieldset">
                        {/* email */}
                        <label className="label">Email</label>
                        <input
                            name="email"
                            type="email"
                            className="input"
                            placeholder="Email"
                        />

                        {/* password */}
                        <label className="label">Password</label>
                        <input
                            name="password"
                            type="password"
                            className="input"
                            placeholder="Password"
                        />
                        <div>
                            <a className="link link-hover">Forgot password?</a>
                        </div>
                        <button type="submit" className="btn btn-neutral mt-4">Login</button>
                        <p className="font-semibold text-center mt-2">Don't have an account <Link className="text-secondary" to='/auth/register'>Register</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
