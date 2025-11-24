import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, [page]);

  const getData = async () => {
    try {
      const response = await axios.get(`https://picsum.photos/v2/list?page=${page}&limit=12`);
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <>
      <h1>Image Gallery</h1>

      {data.length === 0 ? (
        <p className="loading">Loading...</p>
      ) : (
        <div className="container">
          {data.map((item, index) => (
            <div key={index} className="card">
              <img src={item.download_url} alt={item.author} />
              <p>{item.author}</p>
            </div>
          ))}
        </div>
      )}

      <div className="pagination">
        <button
          onClick={() => {
            if (page > 1) {
              setPage(page - 1);
              setData([]);
            }
          }}
        >Prev</button>

        <span className="page-number">Page No. {page}</span>

        <button
          onClick={() => {
            setPage(page + 1);
            setData([]);
          }}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default App;
