import React from "react";

const MediaCard = ({ item }) => {
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
                <button className="bg-blue-600 px-3 py-1 text-sm rounded-md hover:bg-blue-500">
                    Save
                </button>
            </div>
        </div>
    );
};

export default MediaCard;