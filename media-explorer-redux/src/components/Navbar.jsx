import React, { useState } from "react";
import { Search, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { setQuery } from "../redux/features/searchSlice.js";

const Navbar = () => {
    const [showSearch, setShowSearch] = useState(false);
    const [q, setQ] = useState("");

    const dispatch = useDispatch();

    const searchHandler = (e) => {
        e.preventDefault();              
        if (!q.trim()) return;
        dispatch(setQuery(q.trim()));
        setQ("");                        
        setShowSearch(false);           
    };

    return (
        <>
            <nav className="bg-gray-900 text-white px-4 py-4 shadow-md">
                <div className="max-w-7xl mx-auto flex items-center justify-between">

                    {/* Logo */}
                    <div className="text-xl font-bold">Media Explorer</div>

                    {/* Desktop Search — wrapped in form */}
                    <form onSubmit={searchHandler} className="hidden md:flex items-center bg-gray-800 px-3 py-2 rounded-lg w-1/3">
                        <input
                            type="text"
                            placeholder="Search media..."
                            className="bg-transparent outline-none text-sm w-full placeholder-gray-400"
                            value={q}
                            onChange={(e) => setQ(e.target.value)}
                        />
                        <button type="submit" className="ml-2 bg-blue-600 px-3 py-1 rounded-md text-sm hover:bg-blue-500">
                            Search
                        </button>
                    </form>

                    {/* Right Side */}
                    <div className="flex items-center gap-4">

                        {/* Mobile Toggle Button */}
                        <button
                            type="button"
                            onClick={() => setShowSearch(!showSearch)}
                            className="md:hidden bg-gray-800 p-2 rounded-md"
                        >
                            {showSearch ? <X size={18} /> : <Search size={18} />}
                        </button>

                        {/* Nav Links */}
                        <NavLink to="/" className={({ isActive }) => isActive ? "text-blue-500" : "hover:text-gray-300"}>
                            Home
                        </NavLink>
                        <NavLink to="/saved" className={({ isActive }) => isActive ? "text-blue-500" : "hover:text-gray-300"}>
                            Saved
                        </NavLink>
                    </div>
                </div>
            </nav>

            {/* Mobile Search Bar — wrapped in form */}
            {showSearch && (
                <div className="md:hidden px-4 py-2 bg-gray-900">
                    <form onSubmit={searchHandler} className="flex gap-2">
                        <input
                            type="text"
                            placeholder="Search media..."
                            className="flex-1 bg-gray-800 text-white px-3 py-2 rounded-lg outline-none placeholder-gray-400"
                            value={q}
                            onChange={(e) => setQ(e.target.value)}
                            autoFocus
                        />
                        <button type="submit" className="bg-blue-600 px-4 py-2 rounded-lg text-sm hover:bg-blue-500">
                            Go
                        </button>
                    </form>
                </div>
            )}
        </>
    );
};

export default Navbar;