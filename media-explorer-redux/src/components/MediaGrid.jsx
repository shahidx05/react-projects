import React, { useEffect, useState } from "react";
import MediaCard from "./MediaCard";
import { useSelector } from "react-redux";
import { fetchGif, fetchPhotos, fetchVideos } from "../api/api";

const MediaGrid = () => {
    const q = useSelector(state => state.search.query)
    const tab = useSelector(state => state.search.tab)

    const [Photos, setPhotos] = useState([])
    const [videos, setVideos] = useState([])
    const [GIFs, setGIFS] = useState([])
    const [media, setMedia] = useState([])


    const fetchData = async () => {
        try {
            const res1 = await fetchPhotos(q);
            setPhotos(res1.results);
            console.log("Photos:", res1);
            const res2 = await fetchVideos(q);
            setVideos(res2.videos);
            console.log("Videos:", res2);
            const res3 = await fetchGif(q);
            setGIFS(res3.results);
            console.log("GIFs:", res3);
        } catch (error) {
            console.error("Error fetching photos:", error);
        }
    };

    const filterMedia = () => {
        if (tab === "photos") {
            setMedia(Photos.map(photo => ({
                id: photo.id,
                type: 'photo',
                title: photo.alt_description,
                thumbnail: photo.urls.small,
                src: photo.urls.full,
                url: photo.links.html
            })));

        } else if (tab === "gifs") {
            setMedia(GIFs.map(gif => ({
                id: gif.id,
                title: gif.title || 'GIF',
                type: 'gif',
                thumbnail: gif.media_formats.tinygif.url,
                src: gif.media_formats.gif.url,
                url: gif.url
            })));
        } else if (tab === "videos") {
            setMedia(videos.map(video => ({
                id: video.id,
                type: 'video',
                title: video.user.name || 'video',
                thumbnail: video.image,
                src: video.video_files[0].link,
                url: video.url
            })));
        }
    };

    useEffect(() => {
        filterMedia();
    }, [tab, Photos, videos, GIFs])

    useEffect(() => {
        if (q.trim()) {
            fetchData();
        }
    }, [q])

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {media.map((item) => (
                <MediaCard key={item.id} item={item} />
            ))}
        </div>
    );
};

export default MediaGrid;