import { useState, useEffect} from "react";
import InputBox from './components/InputBox';
import useCurrency from './hooks/useCurrency';
import BackgroundImage from './assets/1.jpg'

export const App = () => {
    const [amount, setAmount] = useState(1)
    const [from, setFrom] = useState("USD")
    const [to, setTo] = useState("INR")
    const [convert, setConvert] = useState(0)

    const data = useCurrency(from);
    const options = Object.keys(data)

    useEffect(() => {
        if (!data[to]) return;
        setConvert((amount * data[to]).toFixed(2));
    }, [data, to])
    
    const calc = ()=>{
        if (!data[to]) return;
        setConvert((amount * data[to]).toFixed(2));
    }

    const swap = ()=>{
        setFrom(to)
        setTo(from)
        setAmount(1)
    }

    return (
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat bg-center"
            style={{
                backgroundImage: `url('${BackgroundImage}')`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            calc()
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount={amount}
                                onAmountChange={setAmount}
                                currency={from}
                                onCurrencyChange={setFrom}
                                currencies={options}
                            />
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
                            <InputBox
                                label="To"
                                amount={convert}
                                currency={to}
                                onCurrencyChange={setTo}
                                currencies={options}
                                readOnly
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
                        >
                            Convert
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default App
