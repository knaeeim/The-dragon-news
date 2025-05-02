import React, { useContext, useState } from 'react';
import { AuthContext } from '../Provider/Context';

const ForgatePassword = () => {
    const [error, setError] = useState('');
    const { updatePass } = useContext(AuthContext);

    const handleForgetPassword = (e) => {
        e.preventDefault();
        const form = e.target; 
        setError('')
        const email = form.email.value

        updatePass(email)
        .then(()=>{})
        .catch((error) => {
            setError(error.message);
        })
    }
    return (
        <div className="flex justify-center items-center min-h-[calc(100vh-200px)]">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                <h1 className="font-bold text-2xl text-center">Forgate Your Account Password</h1>
                <div className="card-body">
                    <form onSubmit={handleForgetPassword} className="fieldset">
                        {/* password */}
                        <label className="label">Email</label>
                        <input
                            name="email"
                            type="eamil"
                            className="input"
                            placeholder="Eamil"
                            required
                        />
                        {
                            error && <p className="text-red-500 text-sm">{error}</p>
                        }
                        <button type="submit" className="btn btn-neutral mt-4">Reset Your Password</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ForgatePassword;