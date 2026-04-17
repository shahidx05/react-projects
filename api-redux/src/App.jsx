import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from './features/cart/slicer1'
import Card from './Card'

const App = () => {
  const dispatch = useDispatch()
  const { data, loading, error } = useSelector(state => state.slice1);

  useEffect(() => {
    dispatch(fetchData(20))
  }, [])

   if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Crypto Tracker 🚀</h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
        {data.map((coin) => (
          <Card key={coin.id} coin={coin} />
        ))}
      </div>
    </div>
  );
};

export default App