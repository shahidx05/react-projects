import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, addedToast } from "../redux/features/saveSlice";

const MediaCard = ({ item }) => {
    const dispatch = useDispatch();

    const { items } = useSelector(state => state.save);
    const isSaved = items.some(i => i.id === item.id);

    const handleSave = () => {
        if (isSaved) return;
        dispatch(addItem(item));
        dispatch(addedToast());
    };

    return (
        <div className="bg-gray-900 rounded-xl overflow-hidden shadow-md group">

            {/* Media */}

            <a href={item.url} target="_blank" rel="noreferrer">

                <div className="w-full h-48 bg-black flex items-center justify-center ">

                    {(item.type === "photo" || item.type === "gif") && (
                        <img
                            src={item.src}
                            alt=""
                           className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                    )}

                    {item.type === "video" && (
                        <video src={item.src} autoPlay loop muted className="w-full h-full object-cover" />
                    )}
                </div>
            </a>

            {/* Save Button */}
            <div className="p-2 flex justify-between items-center gap-2">
                <p className="text-xs text-gray-400 truncate flex-1">{item.title}</p>
                <button
                    onClick={handleSave}
                    disabled={isSaved}
                    className={`px-3 py-1 text-sm rounded-md flex-shrink-0 transition-colors ${isSaved
                        ? "bg-gray-600 text-gray-400 cursor-not-allowed"
                        : "bg-blue-600 hover:bg-blue-500 text-white"
                        }`}
                >
                    {isSaved ? "Saved ✓" : "Save"}
                </button>
            </div>
        </div>
    );
};

export default MediaCard;