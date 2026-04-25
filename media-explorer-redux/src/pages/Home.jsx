import React from "react";
import Tabs from "../components/Tabs";
import MediaGrid from "../components/MediaGrid";
import { useSelector } from "react-redux";

const Home = () => {
  const { query } = useSelector(state => state.search);
  return (
    <div className="bg-gray-950 min-h-screen text-white p-4">
      {query && <Tabs />}
      <MediaGrid />
    </div>
  );
};

export default Home;