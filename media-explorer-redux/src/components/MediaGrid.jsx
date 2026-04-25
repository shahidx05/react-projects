import React, { useEffect } from "react";
import MediaCard from "./MediaCard";
import { useSelector, useDispatch } from "react-redux";
import { getPhotos, getGIFs, getVideos } from "../redux/features/searchSlice";

const MediaGrid = () => {
    const dispatch = useDispatch();
    const { query, tab, results, loading, error } = useSelector(state => state.search);

    useEffect(() => {
        if (!query.trim()) return;

        if (tab === "photos") dispatch(getPhotos(query));
        else if (tab === "videos") dispatch(getVideos(query));
        else if (tab === "gifs") dispatch(getGIFs(query));

    }, [query, tab, dispatch]);

    if (loading) return <p className="text-white p-4">Loading...</p>;
    if (error) return <p className="text-red-500 p-4">{error}</p>;
    if (!query.trim()) return <p className="text-gray-400 p-4">Search something...</p>;
    if (!results.length) return <p className="text-gray-400 p-4">No results found for "{query}"</p>;

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {results.map((item) => (
                <MediaCard key={item.id} item={item} />
            ))}
        </div>
    );
};

export default MediaGrid;