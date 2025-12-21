import { useState, useEffect } from "react";

function useCurrency(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        fetch(
            `https://v6.exchangerate-api.com/v6/82d624a523831ec74b8c9256/latest/${currency}`
        )
            .then((res) => res.json())
            .then((res) => setData(res.conversion_rates || {}))
            .catch((err) => console.error("API Error:", err));
    }, [currency]);

    return data;
}

export default useCurrency;
