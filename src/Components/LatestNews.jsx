import React from "react";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
    return (
        <div className="bg-base-200 flex items-center p-2 gap-3 rounded-xl">
            <h1 className="text-base-100 bg-secondary px-3 py-2 rounded-lg whitespace-nowrap">
                Latest News
            </h1>
            <Marquee pauseOnHover={true}>
                <p className="font-bold">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Quia quas ullam atque inventore laborum placeat accusantium
                    ipsum! Ab, deserunt? Nihil.
                </p>
            </Marquee>
        </div>
    );
};

export default LatestNews;
