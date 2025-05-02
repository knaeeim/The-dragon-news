import React from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const FindUs = () => {
    return (
        <div className="space-y-4">
            <h1 className="font-bold text-center">Find Us On:-</h1>
            <div className="join join-vertical w-full">
                <button className="btn join-item justify-start"><FaFacebook></FaFacebook> FaceBook</button>
                <button className="btn join-item justify-start"><FaLinkedin></FaLinkedin> LinkedIn</button>
                <button className="btn join-item justify-start"><FaGithub></FaGithub> Github</button>
            </div>
        </div>
    );
};

export default FindUs;
