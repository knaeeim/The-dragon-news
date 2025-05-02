import React, { useEffect, useState } from "react";
import { NavLink } from "react-router";

const Categories = () => {
    const [categories, setCategories] = useState([]);
    const categoriesData = async () => {
        const res = await fetch("/categories.json");
        const data = await res.json();
        setCategories(data);
    };
    useEffect(() => {
        categoriesData();
    },[]);
    return (
        <div>
            <h1 className="font-bold text-center">All Categories ({categories.length})</h1>

            <div className="grid grid-cols-1 mt-5 gap-3">
                {
                    categories.map((category) => {
                        return (
                            <NavLink key={category.id} to={`/category/${category.id}`} className={({isActive}) => `btn bg-base-100 border-0 hover:bg-base-300 text-accent ${ isActive ? "underline font-semibold bg-base-300" : ""} `}>{category.name}</NavLink>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Categories;
