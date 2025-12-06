import { useState, useEffect } from "react";

const API = `https://v6.exchangerate-api.com/v6/82d624a523831ec74b8c9256/latest/${from.value}`

function useCurrency(currency){
    const [data, setdata] = useState({})
    useEffect(() => {
      fetch(API)
      .then((res)=> res.json)
      .then((res)=> setdata(res["conversion_rates"]))
    }, [currency])
    return data
}

export default useCurrency