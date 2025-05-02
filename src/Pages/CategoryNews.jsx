import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "../Components/NewsCard";

const CategoryNews = () => {
    const { id } = useParams();
    const data = useLoaderData();
    const [categoryNews, setCategoryNews] = useState([]);

    useEffect(() => {
        if (id === "0") {
            setCategoryNews(data);
        } else if (id === "1") {
            const todaysNews = data.filter(
                (news) => news.others?.is_today_pick === true
            );
            setCategoryNews(todaysNews);
        } else {
            const categoryNews = data.filter(
                (news) => news.category_id === parseInt(id)
            );
            setCategoryNews(categoryNews);
        }
    }, [id, data]);

    return (
        <div className="grid grid-cols-1 gap-5">
            {categoryNews.length > 0 ? (
                categoryNews.map((news) => {
                    return <NewsCard key={news.id} news={news}></NewsCard>;
                })
            ) : (
                <h1 className="text-center text-3xl font-bold text-secondary">
                    No News Found
                </h1>
            )}
        </div>
    );
};

export default CategoryNews;
