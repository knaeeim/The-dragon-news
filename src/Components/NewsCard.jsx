import React from 'react';
import { Star, Eye } from 'lucide-react';
import { useNavigate } from 'react-router';

const NewsCard = ({ news }) => {
    const {
        title,
        rating,
        total_view,
        author,
        thumbnail_url,
        image_url,
        details,
        tags
    } = news;

    const navigate = useNavigate();

    const handleReadMore = () => {
        navigate(`/category/details/${news.id}`, 
            { state: { news } }
        );
    }

    return (
        <div onClick={handleReadMore} className="bg-base-100 shadow-md rounded-2xl overflow-hidden border border-base-300">
            {/* Thumbnail or Banner Image */}
            <img src={image_url || thumbnail_url} alt={title} className="w-full md:h-96 object-cover" />

            <div className="p-4 space-y-3">
                {/* Title */}
                <h2 className="text-xl font-bold text-accent">{title}</h2>

                {/* Author & Meta Info */}
                <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                        <img src={author?.img} alt={author?.name} className="w-8 h-8 rounded-full object-cover" />
                        <div>
                            <p className="font-semibold">{author?.name || 'Unknown'}</p>
                            <p className="text-xs">{author?.published_date}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1">
                            <Star className="w-4 h-4 text-yellow-500" /> {rating?.number || "N/A"}
                        </span>
                        <span className="flex items-center gap-1">
                            <Eye className="w-4 h-4" /> {total_view || 0}
                        </span>
                    </div>
                </div>

                {/* News Details */}
                <p className="text-sm text-gray-700">
                    {details?.length > 200 ? `${details.slice(0, 200)}...` : details}
                </p>

                {/* Tags */}
                {tags?.length > 0 && (
                    <div className="flex flex-wrap gap-2 text-xs mt-2">
                        {tags.map((tag, index) => (
                            <span
                                key={index}
                                className="bg-base-200 text-secondary px-2 py-1 rounded-full"
                            >
                                #{tag}
                            </span>
                        ))}
                    </div>
                )}

                {/* Read More */}
                <div className="pt-3">
                    <button className="btn btn-sm bg-secondary text-white hover:bg-secondary/90">
                        Read More
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;
