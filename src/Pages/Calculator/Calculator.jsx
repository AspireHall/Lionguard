import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const Calculator = () => {
  const [principal, setPrincipal] = useState(25000);
  const [rate, setRate] = useState(7);
  const [time, setTime] = useState(30);
  const [frequency, setFrequency] = useState(1);
  const [contributions, setContributions] = useState(9600);
  const [data, setData] = useState(null);
  const [tableData, setTableData] = useState([]);

  const calculateCompoundInterest = () => {
    let labels = [];
    let balanceData = [];
    let tableResults = [];
    let totalContributions = 0;

    for (let year = 0; year <= time; year++) {
      const compoundedAmount =
        principal * Math.pow(1 + rate / 100 / frequency, frequency * year);
      totalContributions = principal + contributions * year;

      labels.push(`Year ${year}`);
      balanceData.push(compoundedAmount.toFixed(2));

      tableResults.push({
        year: year,
        futureValue: compoundedAmount.toFixed(2),
        totalContributions: totalContributions.toFixed(2),
      });
    }

    setData({
      labels: labels,
      datasets: [
        {
          label: "Compound Interest",
          data: balanceData,
          fill: false,
          borderColor: "rgba(75,192,192,1)",
          tension: 0.1,
        },
      ],
    });

    setTableData(tableResults);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    calculateCompoundInterest();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Compound Interest Calculator</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Principal: </label>
          <input
            type="number"
            value={principal}
            onChange={(e) => setPrincipal(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Annual Interest Rate (%): </label>
          <input
            type="number"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Time (years): </label>
          <input
            type="number"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Compounding Frequency (times per year): </label>
          <input
            type="number"
            value={frequency}
            onChange={(e) => setFrequency(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Annual Contributions: </label>
          <input
            type="number"
            value={contributions}
            onChange={(e) => setContributions(e.target.value)}
            required
          />
        </div>
        <button type="submit">Calculate</button>
      </form>

      {data && (
        <div style={{ marginTop: "50px" }}>
          <Line data={data} />
        </div>
      )}

      {tableData.length > 0 && (
        <div style={{ marginTop: "50px" }}>
          <h2>Compound Interest Table</h2>
          <table
            border="1"
            cellPadding="10"
            style={{ width: "100%", textAlign: "center" }}
          >
            <thead>
              <tr>
                <th>Year</th>
                <th>Future Value</th>
                <th>Total Contributions</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, index) => (
                <tr key={index}>
                  <td>{row.year}</td>
                  <td>{row.futureValue}</td>
                  <td>{row.totalContributions}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Calculator;
