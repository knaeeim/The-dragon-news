import React from "react";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
    return (
        <div className="bg-base-200 flex items-center p-2 gap-3 rounded-xl">
            <h1 className="text-base-100 bg-secondary px-3 py-2 rounded-lg whitespace-nowrap">
                Latest News
            </h1>
            <Marquee pauseOnHover={true}>
                <p className="font-bold ml-10">
                    শেখ হাসিনা বললেন, রোববার থেকে বুধবারে সরাসরি জাম্প দিলে ট্রাফিক জ্যাম কমবে!
                </p>
                <p className="font-bold ml-10">
                    রাত ২টায় হঠাৎ ঘুম থেকে উঠে বললেন: 'পদ্মা সেতু আমিই বানাইছি, স্বপ্নেও!
                </p>
                <p className="font-bold ml-10">
                    নতুন ঘোষণা: যাদের মুখে 'উন্নয়ন' শব্দ নেই, তাদের ভোটার আইডি এক মাসের জন্য স্থগিত!
                </p>
                <p className="font-bold ml-10">
                    গণভবনে চালু হলো 'উন্নয়ন থেরাপি'— যেখানে দিনে ৩ বার শেখ হাসিনার ভাষণ শুনে মন ভালো থাকে!
                </p>
            </Marquee>
        </div>
    );
};

export default LatestNews;
