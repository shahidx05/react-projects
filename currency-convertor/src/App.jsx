import { useState, useEffect } from 'react'
import axios from 'axios';

export const App = () => {
  const [x, setx] = useState("")
  const [y, sety] = useState("")
  const [from, setfrom] = useState("USD")
  const [to, setto] = useState("INR")
  const [data, setdata] = useState({})

  const getData = async () => {
    try {
      const res = await axios.get(
        `https://v6.exchangerate-api.com/v6/82d624a523831ec74b8c9256/latest/${from}`
      );
      setdata(res.data);
    } catch (err) {
      console.error("Error fetching currency data:", err);
    }
  };

  const swap = ()=>{
    setfrom(to);
    setto(from);
  }

const calc = (e) => {
  e.preventDefault();
  
  const rate = data?.conversion_rates?.[to];

  if (!rate || !x) {
    sety("");   // empty instead of NaN
    return;
  }

  const result = Number(x) * rate;
  sety(result.toFixed(2)); // rounded + valid string
};



  const currencyKeys = data?.conversion_rates ? Object.keys(data.conversion_rates) : [];


  useEffect(() => {
    getData();
  }, [from]);


  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        // backgroundImage: `url('${}')`,
        backgroundColor: "#222"
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
          onSubmit={calc}>
            <div className="w-full mb-1">
              <div className={`bg-white p-3 rounded-lg text-sm flex `}>
                <div className="w-1/2">
                  <label className="text-black/40 mb-2 inline-block">
                    From
                  </label>
                  <input

                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    value={x}
                    onChange={(e) => setx(e.target.value)}
                  />
                </div>
                <div className="w-1/2 flex flex-wrap justify-end text-right">
                  <p className="text-black/40 mb-2 w-full">Currency Type</p>
                  <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    onChange={(e) => setfrom(e.target.value)} value={from}
                  >
                    {currencyKeys.map((code) => (
                      <option key={code} value={code}>
                        {code}
                      </option>
                    ))}

                  </select>
                </div>
              </div>
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                    onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <div className={`bg-white p-3 rounded-lg text-sm flex `}>
                <div className="w-1/2">
                  <label className="text-black/40 mb-2 inline-block">
                    To
                  </label>
                  <input
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    value={y}
                    readOnly
                  />
                </div>
                <div className="w-1/2 flex flex-wrap justify-end text-right">
                  <p className="text-black/40 mb-2 w-full">Currency Type</p>
                  <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                     value={to}
                     defaultValue="INR"
                    onChange={(e) => setto(e.target.value)}
                  >

                    {currencyKeys.map((code) => (
                      <option key={code} value={code}>
                        {code}
                      </option>
                    ))}

                  </select>
                </div>
              </div>
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
              Convert
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App
