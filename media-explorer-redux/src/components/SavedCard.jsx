import React from "react";
import { useDispatch } from "react-redux";
import { removeItem, removeToast } from "../redux/features/saveSlice";

const SavedCard = ({ item }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeItem(item.id));
    dispatch(removeToast());
  };

  return (

    <div className="bg-gray-900 rounded-xl overflow-hidden shadow-md">
      <a href={item.url} target="_blank" rel="noreferrer">

        {/* Media */}
        <div className="w-full h-48 bg-black overflow-hidden">
          {(item.type === "photo" || item.type === "gif") && (
            <img
              src={item.src}
              alt={item.title || "media"}
              className="w-full h-full object-cover"
            />
          )}

          {item.type === "video" && (
            <video src={item.src} autoPlay loop muted className="w-full h-full object-cover" />
          )}
        </div>
      </a>

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