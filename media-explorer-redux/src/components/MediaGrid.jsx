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

    }, [query, tab]);

    if (loading) return <p className="text-white p-4">Loading...</p>;
    if (error) return <p className="text-red-500 p-4">{error}</p>;
    if (!query.trim()) return <p className="text-gray-400 p-4">Search something...</p>;

    const transformedData = results.map(item => {
        if (tab === "photos") {
            return {
                id: item.id,
                type: "image",
                src: item.urls.small,
                title: item.alt_description,
                url: item.links.html
            };
        }

        if (tab === "gifs") {
            return {
                id: item.id,
                type: "gif",
                src: item.media_formats.gif.url,
                title: item.title || "GIF",
                url: item.url
            };
        }

        if (tab === "videos") {
            return {
                id: item.id,
                type: "video",
                src: item.video_files[0]?.link,
                title: item.user?.name || "Video",
                url: item.url
            };
        }
    });

    if (!transformedData.length) {
        return <p className="text-gray-400 p-4">No results found for "{query}"</p>;
    }

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {transformedData.map((item) => (
                <MediaCard key={item.id} item={item} />
            ))}
        </div>
    );
};

export default MediaGrid;