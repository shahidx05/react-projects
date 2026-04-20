import React from "react";
import { useDispatch } from "react-redux";
import {  removeItem  } from "../redux/features/saveSlice";

const SavedCard = ({ item }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeItem(item.id));
  };

  return (
    <div className="bg-gray-900 rounded-xl overflow-hidden shadow-md">
      
      {/* Media */}
      <div className="w-full h-48 bg-black">
        {(item.type === "image" || item.type === "gif") && (
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

      {/* Bottom */}
      <div className="p-2 flex justify-between items-center text-white">
        <p className="text-xs truncate">{item.title}</p>

        <button
          onClick={handleRemove}
          className="bg-red-600 px-3 py-1 text-sm rounded-md hover:bg-red-500"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default SavedCard;