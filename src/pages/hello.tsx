import { useState, useEffect } from "react";
import axios from "axios";

type CurrencyRates = {
  [key: string]: number;
};

const App: React.FC = () => {
  const [amount, setAmount] = useState<number>(1);
  const [fromCurrency, setFromCurrency] = useState<string>("USD");
  const [toCurrency, setToCurrency] = useState<string>("JPY");
  const [exchangeRate, setExchangeRate] = useState<number | null>(null);
  const [currencies, setCurrencies] = useState<string[]>([]);

  const API_KEY = "3142e76713b331ed813475ea"; // از https://www.exchangerate-api.com بگیر
  const API_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${fromCurrency}`;

  useEffect(() => {
    fetchCurrencies();
  }, []);

  useEffect(() => {
    fetchExchangeRate();
  }, [fromCurrency, toCurrency]);

  const fetchCurrencies = async () => {
    try {
      const response = await axios.get<{ conversion_rates: CurrencyRates }>(API_URL);
      setCurrencies(Object.keys(response.data.conversion_rates));
    } catch (error) {
      console.error("Error fetching currencies:", error);
    }
  };

  const fetchExchangeRate = async () => {
    try {
      const response = await axios.get<{ conversion_rates: CurrencyRates }>(API_URL);
      setExchangeRate(response.data.conversion_rates[toCurrency]);
    } catch (error) {
      console.error("Error fetching exchange rate:", error);
    }
  };

  const handleConvert = (): string => {
    return exchangeRate ? (amount * exchangeRate).toFixed(2) : "در حال دریافت...";
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200 p-4">
      <div className="bg-gray-100 p-8 rounded-xl shadow-neumorphism w-96 text-center">
        <h2 className="text-3xl font-bold text-gray-700 mb-6">Currency Converter</h2>
        
        <div className="relative mb-4">
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600">از</span>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(parseFloat(e.target.value))}
            className="w-full p-3 pl-12 border-none rounded-lg shadow-inner text-lg bg-gray-200 focus:outline-none"
          />
        </div>

        <div className="flex justify-between items-center mb-4">
          <select
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value)}
            className="p-3 w-1/2 rounded-lg shadow-inner bg-gray-200 text-lg focus:outline-none"
          >
            {currencies.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>

          <span className="text-xl">➡️</span>

          <select
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
            className="p-3 w-1/2 rounded-lg shadow-inner bg-gray-200 text-lg focus:outline-none"
          >
            {currencies.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>

        <button
          onClick={fetchExchangeRate}
          className="w-full bg-blue-500 text-white p-3 rounded-lg mt-4 shadow-lg hover:bg-blue-700 transition duration-300"
        >
          Convert
        </button>

        <p className="text-2xl font-bold text-gray-700 mt-6">
          {handleConvert()} {toCurrency}
        </p>
      </div>
    </div>
  );
};

export default App;