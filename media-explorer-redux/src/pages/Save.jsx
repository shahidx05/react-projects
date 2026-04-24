import React from "react";
import { useSelector, useDispatch } from "react-redux";
import SavedCard from "../components/SavedCard";
import { clearItems } from "../redux/features/saveSlice";

const Save = () => {
  const dispatch = useDispatch();
  const { items } = useSelector(state => state.save);

  const handleClearAll = () => {
    dispatch(clearItems());
  };

  if (!items.length) {
    return (
      <div className="bg-gray-950 min-h-screen flex flex-col items-center justify-center text-gray-400">
        <p className="text-lg">No saved items yet 😅</p>
        <p className="text-sm mt-2">Start saving some media!</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-950 min-h-screen text-white p-4">

      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-semibold">Saved Media</h1>

        <button
          onClick={handleClearAll}
          className="bg-red-600 px-4 py-2 text-sm rounded-md hover:bg-red-500"
        >
          Clear All
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((item) => (
          <SavedCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Save;