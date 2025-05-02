import React, { useContext } from "react";
import { Link, Navigate, useNavigate } from "react-router";
import { AuthContext } from "../Provider/Context";
import toast from "react-hot-toast";

const Register = () => {
    const { createUser, updateUser, setUser } = useContext(AuthContext);
    // console.log(createUser);

    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;

        // form values
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);

                const userInfo = {
                    displayName: name,
                    photoURL: photo,
                };

                updateUser(userInfo)
                    .then(() => {
                        console.log("User has been updated successfully");
                        setUser({...user, userInfo})
                    })
                    .catch((error) => {
                        console.log(error, "has been caught successfully");
                        setUser(user)
                    });
                
                toast.success(
                    `${user.displayName} Register Successfully`
                );
                navigate("/");
            })
            .catch((error) => {
                console.log(error);
            });
    };
    return (
        <div className="flex justify-center items-center min-h-[calc(100vh-200px)]">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                <h1 className="font-bold text-2xl text-center">
                    Register Your Account
                </h1>
                <div className="card-body">
                    <form onSubmit={handleRegister} className="fieldset">
                        {/* Name */}
                        <label className="label">Name</label>
                        <input
                            name="name"
                            type="text"
                            className="input"
                            placeholder="Name"
                            required
                        />

                        {/* Photo URL */}
                        <label className="label">Photo URL</label>
                        <input
                            name="photo"
                            type="text"
                            className="input"
                            placeholder="Photo URL"
                            required
                        />

                        {/* Email */}
                        <label className="label">Email</label>
                        <input
                            name="email"
                            type="email"
                            className="input"
                            placeholder="Email"
                            required
                        />

                        {/* Password */}
                        <label className="label">Password</label>
                        <input
                            name="password"
                            type="password"
                            className="input"
                            placeholder="Password"
                            required
                        />
                        <button type="submit" className="btn btn-neutral mt-4">
                            Register
                        </button>
                        <p className="font-semibold text-center mt-2">
                            Already have an account?{" "}
                            <Link className="text-secondary" to="/auth/login">
                                Login
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
