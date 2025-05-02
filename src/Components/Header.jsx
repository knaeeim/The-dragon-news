import React from "react";
import logo from "../assets/logo.png";
import { format } from "date-fns";

const Header = () => {
    return (
        <div className="flex justify-center flex-col items-center gap-3 mt-5">
            <img className="w-60 md:w-96" src={logo} alt="the dragon news" />
            <p className="text-xs md:text-lg">
                Journalism for Shiekh Hasina Only
            </p>
            {/* Sunday, November 27, 2025 */}
            <p className="font-semibold text-accent text-sm">
                {format(new Date(), "EEEE, MMMM dd, yyyy")}
            </p>
        </div>
    );
};

export default Header;
