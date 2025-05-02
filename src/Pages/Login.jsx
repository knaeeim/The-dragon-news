import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/Context";
import toast from "react-hot-toast";

const Login = () => {
    const [error, setError] = useState('');
    const { logInUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    // console.log(location);

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;

        setError('')
        // form values
        const email = form.email.value;
        const password = form.password.value;

        logInUser(email, password)
        .then((result) => {
            const user = result.user;
            toast.success(`${user.displayName} Login Successfully`);
            navigate(`${location.state ? location.state : '/'}`);
        })
        .catch((error) => {
            console.log(error);
            setError(error.code, error.message)
        })

    }

    const handleForgetPassword = () => {
        navigate('/auth/forgate-password');
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
                            required
                        />

                        {/* password */}
                        <label className="label">Password</label>
                        <input
                            name="password"
                            type="password"
                            className="input"
                            placeholder="Password"
                            required
                        />
                        {
                            error && <p className="text-red-500 text-sm">{error}</p>
                        }
                        <div>
                            <a onClick={handleForgetPassword} className="link link-hover">Forgot password?</a>
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
