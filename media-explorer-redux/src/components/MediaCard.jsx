import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/features/saveSlice";

const MediaCard = ({ item }) => {
    const dispatch = useDispatch();

    const { items } = useSelector(state => state.save);
    const isSaved = items.some(i => i.id === item.id);

    const handleSave = () => {
        dispatch(addItem(item));
    };

    return (
        <div className="bg-gray-900 rounded-xl overflow-hidden shadow-md">

            {/* Media */}
            <div className="w-full h-48 bg-black flex items-center justify-center">

                {(item.type === "photo" || item.type === "gif") && (
                    <img
                        src={item.src}
                        alt=""
                        className="w-full h-full object-cover"
                    />
                )}

                {item.type === "video" && (
                    <video
                        src={item.src}
                        controls
                        className="w-full h-full object-cover"
                    />
                )}
            </div>

            {/* Save Button */}
            <div className="p-2 flex justify-end">
                <button onClick={handleSave} disabled={isSaved}
                    className={isSaved ? "bg-gray-600 px-3 py-1 text-sm rounded-md hover:bg-blue-500" : "bg-blue-600 px-3 py-1 text-sm rounded-md hover:bg-gray-500"}>
                    {isSaved ? "Saved ✓" : "Save"}
                </button>
            </div>
        </div>
    );
};

export default MediaCard;