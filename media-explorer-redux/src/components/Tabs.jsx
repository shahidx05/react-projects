import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setTab } from "../redux/features/searchSlice";

const Tabs = () => {
    const tabs = ['photos', 'videos', 'gifs']
    const dispatch = useDispatch();
    const { tab } = useSelector((state) => state.search);

    return (
        <div className="flex gap-4 mb-6">
            {tabs.map((elem, idx) => {
                return (
                    <button
                        className={`px-4 py-2 rounded-lg text-sm ${tab === elem ? "bg-blue-600 uppercase" : "bg-gray-800 hover:bg-gray-700 uppercase"}`}
                        key={idx}
                        onClick={() => dispatch(setTab(elem))}
                    >
                        {elem}
                    </button>
                )
            })}
        </div>
    );
};

export default Tabs;