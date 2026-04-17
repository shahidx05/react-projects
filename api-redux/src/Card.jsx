const Card = ({ coin }) => {
    return (
        <div className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-xl transition duration-300 flex flex-col justify-between h-full">
            
            {/* Top: Rank + Image */}
            <div className="flex justify-between items-center mb-4">
                <span className="text-xs font-semibold bg-gray-100 px-2 py-1 rounded-lg">
                    #{coin?.market_cap_rank}
                </span>

                <img
                    src={coin?.image}
                    alt={coin?.name}
                    className="w-10 h-10"
                />
            </div>

            {/* Middle: Name + Symbol */}
            <div className="text-center flex-1 flex flex-col justify-center">
                <h3 className="font-semibold text-lg leading-tight">
                    {coin?.name}
                </h3>

                <p className="text-gray-500 text-sm uppercase tracking-wide">
                    {coin?.symbol}
                </p>
            </div>

            {/* Price */}
            <div className="text-center mt-2">
                <p className="text-xl font-bold">
                    ${coin?.current_price?.toFixed(2) ?? "N/A"}
                </p>
            </div>

            {/* Bottom: Market Cap + Change */}
            <div className="mt-4 flex justify-between items-center text-sm">
                <div>
                    <p className="text-gray-400 text-xs">Market Cap</p>
                    <p className="font-medium">
                        ${coin?.market_cap?.toLocaleString() ?? "N/A"}
                    </p>
                </div>

                <div
                    className={`font-semibold ${
                        coin?.price_change_percentage_24h > 0
                            ? "text-green-500"
                            : "text-red-500"
                    }`}
                >
                    {coin?.price_change_percentage_24h?.toFixed(2) ?? "N/A"}%
                </div>
            </div>
        </div>
    );
};

export default Card;