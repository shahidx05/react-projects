import React from "react";
import Tabs from "../components/Tabs";
import MediaGrid from "../components/MediaGrid";

const Home = () => {
  return (
    <div className="bg-gray-950 min-h-screen text-white p-4">
      <Tabs />
      <MediaGrid />
    </div>
  );
};

export default Home;