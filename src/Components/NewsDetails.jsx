import React, { useEffect, useState } from "react";
import Header from "./Header";
import RightAside from "./HomeLayout/RightAside";
import { useLoaderData, useNavigate, useParams } from "react-router";

const NewsDetails = () => {
    const params = useParams();
    // get news data from location state
    const data = useLoaderData();
    const [news, setNews] = useState({});
    // for back button
    const navigate = useNavigate();

    useEffect(() => {
        const newsData = data.find((item) => item.id === params.id);
        setNews(newsData);
    },[data, params.id])


    const {
        title,
        author,
        thumbnail_url,
        image_url,
        details,
    } = news;
    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <div className="main w-11/12 mx-auto grid grid-cols-12 gap-5 mt-5">
                <div className="news-div md:col-span-9 col-span-12 px-10 py-10 shadow-xl">
                    <div className="mb-5">
                        <button onClick={() => navigate(-1)} className="btn btn-primary">Back to Home</button>
                    </div>
                    <div className="">
                        <img
                            className="w-full rounded-2xl"
                            src={thumbnail_url || image_url}
                            alt=""
                        />
                    </div>
                    {/* author div */}
                    <div className="flex items-center gap-5 mt-5">
                        <img
                            className="w-12 h-12 rounded-full object-cover"
                            src={author?.img}
                            alt=""
                        />
                        <div>
                            <span className="font-bold">{author?.name}</span>
                            <p className="text-sm text-gray-500">
                                {author?.published_date}
                            </p>
                        </div>
                    </div>
                    {/* title and description div */}
                    <div>
                        <h1 className="text-3xl font-bold text-accent mt-5">
                            {title}
                        </h1>
                        <p className="text-gray-500 mt-5">{details}</p>
                    </div>
                </div>

                <div className="right-aside md:col-span-3 col-span-12">
                    <RightAside></RightAside>
                </div>
            </div>
        </div>
    );
};

export default NewsDetails;
