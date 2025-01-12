import React, { useEffect, useState } from "react";
import "./index.css";

const App = () => {
  // Initialize used for Question 1
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // Initialize used for Question 2
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [minRevenue, setMinRevenue] = useState("");
  const [maxRevenue, setMaxRevenue] = useState("");
  const [minNetIncome, setMinNetIncome] = useState("");
  const [maxNetIncome, setMaxNetIncome] = useState("");

  // Initialize used for Question 3
  const [sortColumn, setSortColumn] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  // Question 1
  useEffect(() => {
    const API_KEY = "DpiN7LGVJc9knVBhpC4vyCFJtWGzuF6N";
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://financialmodelingprep.com/api/v3/income-statement/AAPL?period=annual&apikey=${API_KEY}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setData(result);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(true);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500">Failed to fetch data. Please try again later.</div>;
  }

  // Question 2
  const filteredData = data.filter((item) => {
    const withinDateRange =
      (!startDate || item.date >= startDate) && (!endDate || item.date <= endDate);
    const withinRevenueRange =
      (!minRevenue || item.revenue >= minRevenue) && 
      (!maxRevenue || item.revenue <= maxRevenue);
    const withinNetIncomeRange =
      (!minNetIncome || item.netIncome >= minNetIncome) &&
      (!maxNetIncome || item.netIncome <= maxNetIncome);
  
    return withinDateRange && withinRevenueRange && withinNetIncomeRange;
  });

  // Question 3
  const sortedData = [...filteredData].sort((a, b) => {
    if (!sortColumn) return 0;
  
    const valueA = a[sortColumn];
    const valueB = b[sortColumn];
  
    if (sortOrder === "asc") {
      return valueA > valueB ? 1 : valueA < valueB ? -1 : 0;
    } else {
      return valueA < valueB ? 1 : valueA > valueB ? -1 : 0;
    }
  });

  const handleSort = (column) => {
    if (sortColumn === column) {
      // If the column is already sorted, toggle the sort order
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      // Otherwise, sort by the new column in ascending order
      setSortColumn(column);
      setSortOrder("asc");
    }
  };
  

  // Converted string to include `,` as increasing readability
  const formatNumber = (num) => num.toLocaleString("en-US");

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl md:text-4xl font-extrabold text-center">Apple's Financial Data</h1>

      <div className="mb-4">
        <h2 className="text-lg md:text-xl font-bold mb-4">Filters</h2>
        
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {/* Date Range */}
          <div>
            <div>
              <label className="block font-semibold">Start Date</label>
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="border rounded px-2 py-1 w-full"
              />
            </div>
            
            <div>
              <label className="block font-semibold">End Date</label>
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="border rounded px-2 py-1 w-full"
              />
            </div>
          </div>

          {/* Revenue Range */}
          <div>
            <div>
              <label className="block font-semibold">Min Revenue</label>
              <input
                type="number"
                value={minRevenue}
                onChange={(e) => setMinRevenue(e.target.value)}
                className="border rounded px-2 py-1 w-full"
              />
            </div>
            <div>
              <label className="block font-semibold">Max Revenue</label>
              <input
                type="number"
                value={maxRevenue}
                onChange={(e) => setMaxRevenue(e.target.value)}
                className="border rounded px-2 py-1 w-full"
              />
            </div>
          </div>

          {/* Net Income Range */}
          <div>
            <div>
              <label className="block font-semibold">Min Net Income</label>
              <input
                type="number"
                value={minNetIncome}
                onChange={(e) => setMinNetIncome(e.target.value)}
                className="border rounded px-2 py-1 w-full"
              />
            </div>
            <div>
              <label className="block font-semibold">Max Net Income</label>
              <input
                type="number"
                value={maxNetIncome}
                onChange={(e) => setMaxNetIncome(e.target.value)}
                className="border rounded px-2 py-1 w-full"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 flex justify">
        <button
          onClick={() => {
            setStartDate("");
            setEndDate("");
            setMinRevenue("");
            setMaxRevenue("");
            setMinNetIncome("");
            setMaxNetIncome("");
          }}
          className="bg-blue-500 text-white px-4 py-2 rounded-full mt-4"
        >
          Clear Filters
        </button>
      </div>

      <table className="table-auto border-collapse border border-gray-300 mx-auto mt-4">
        <thead>
          <tr className="bg-green-400">
            <th
              className="border-2 border-black px-4 py-2 cursor-pointer"
              onClick={() => handleSort("date")}
            >
              Date {sortColumn === "date" && (sortOrder === "asc" ? "↑" : "↓")}
            </th>
            <th
              className="border-2 border-black px-4 py-2 cursor-pointer"
              onClick={() => handleSort("revenue")}
            >
              Revenue {sortColumn === "revenue" && (sortOrder === "asc" ? "↑" : "↓")}
            </th>
            <th
              className="border-2 border-black px-4 py-2 hidden sm:table-cell cursor-pointer"
              onClick={() => handleSort("netIncome")}
            >
              Net Income {sortColumn === "netIncome" && (sortOrder === "asc" ? "↑" : "↓")}
            </th>
            <th className="border-2 border-black px-4 py-2">Gross Profit</th>
            <th className="border-2 border-black px-4 py-2">EPS</th>
            <th className="border-2 border-black px-4 py-2">Operating Income</th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((item, index) => (
            <tr 
              key={item.date} 
              className={index % 2 === 0 ? "bg-gray-200" : "bg-white" }
            >
              <td className="border border-gray-400 px-4 py-2">{item.date}</td>
              <td className="border border-gray-400 px-4 py-2">{formatNumber(item.revenue)}</td>
              <td className="border border-gray-400 px-4 py-2">{formatNumber(item.netIncome)}</td>
              <td className="border border-gray-400 px-4 py-2">{formatNumber(item.grossProfit)}</td>
              <td className="border border-gray-400 px-4 py-2">{item.eps}</td>
              <td className="border border-gray-400 px-4 py-2">{formatNumber(item.operatingIncome)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
