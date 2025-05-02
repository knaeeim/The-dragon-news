import React from "react";
import Header from "../Components/Header";
import LatestNews from "../Components/LatestNews";
import Navbar from "../Components/Navbar";
import LeftAside from "../Components/HomeLayout/LeftAside";
import { Outlet, useNavigation } from "react-router";
import RightAside from "../Components/HomeLayout/RightAside";
import Loading from "../Pages/Loading";

const HomeLayOut = () => {

    const { state } = useNavigation();
    return (
        <div>
            {/* Header */}
            <header>
                <Header></Header>
                <section className="w-11/12 mx-auto my-3">
                    <LatestNews></LatestNews>
                </section>
                <nav className="w-11/12 mx-auto my-8">
                    <Navbar></Navbar>
                </nav>
            </header>

            {/* Main Content */}
            <main className="w-11/12 mx-auto grid md:grid-cols-12 grid-cols-1 md:gap-5 gap-y-5">
                <aside className="col-span-3 shadow-xl px-2 py-3 md:sticky md:top-5 md:h-fit">
                    <LeftAside></LeftAside>
                </aside>
                <section className="main col-span-6 px-5 py-5 shadow-xl">
                    {state == "loading" ? <Loading></Loading> : <Outlet></Outlet>}
                </section>
                <aside className="col-span-3 shadow-xl px-2 py-2 sticky top-5 h-fit">
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default HomeLayOut;
