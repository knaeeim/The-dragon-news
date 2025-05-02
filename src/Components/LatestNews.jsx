import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { useLoaderData } from "react-router";

const LatestNews = () => {
    const news = useLoaderData();
    const [breakingNews, setBreakingNews] = useState([]);
    console.log(breakingNews);
    useEffect(() => {
        const breakingNewsData = news.filter(
            (breaking) => breaking?.others.is_today_pick === true
        );
        setBreakingNews(breakingNewsData);
    }, [news]);
    return (
        <div className="bg-base-200 flex items-center p-2 gap-3 rounded-xl">
            <h1 className="text-base-100 bg-secondary px-3 py-2 rounded-lg whitespace-nowrap">
                Latest News
            </h1>
            <Marquee pauseOnHover={true}>
                {breakingNews.map((news) => {
                    console.log(news);
                    return (
                        <p className="font-bold ml-10">
                            {news?.title}
                        </p>
                    );
                })}
            </Marquee>
        </div>
    );
};

export default LatestNews;
