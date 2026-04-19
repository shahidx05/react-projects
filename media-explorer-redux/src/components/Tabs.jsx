import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setTab } from "../redux/features/searchSlice";

const Tabs = () => {
    const dispatch = useDispatch();
    const { tab } = useSelector((state) => state.search);

    return (
        <div className="flex gap-4 mb-6">
            <button
                className={`px-4 py-2 rounded-lg text-sm ${tab === "photos" ? "bg-blue-600" : "bg-gray-800 hover:bg-gray-700"}`}
                onClick={() => dispatch(setTab("photos"))}
            >
                Photos
            </button>
            <button
                className={`px-4 py-2 rounded-lg text-sm ${tab === "gifs" ? "bg-blue-600" : "bg-gray-800 hover:bg-gray-700"}`}
                onClick={() => dispatch(setTab("gifs"))}
            >
                GIFs
            </button>
            <button
                className={`px-4 py-2 rounded-lg text-sm ${tab === "videos" ? "bg-blue-600" : "bg-gray-800 hover:bg-gray-700"}`}
                onClick={() => dispatch(setTab("videos"))}
            >
                Videos
            </button>
        </div>
    );
};

export default Tabs;