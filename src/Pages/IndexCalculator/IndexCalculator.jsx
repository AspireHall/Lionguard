import { useEffect, useState } from "react";
import classes from "./IndexCalculator.module.css";
import Chart from "chart.js/auto";
import Switch from "@mui/material/Switch";

import PrintIcon from "@mui/icons-material/Print";

import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  Tooltip,
  Legend
);

const sp500Returns = {
  1998: 26.67,
  1999: 19.53,
  2000: -10.14,
  2001: -13.04,
  2002: -23.37,
  2003: 26.38,
  2004: 8.99,
  2005: 3.0,
  2006: 13.62,
  2007: 3.53,
  2008: -38.49,
  2009: 23.45,
  2010: 12.78,
  2011: 0.0,
  2012: 13.41,
  2013: 29.6,
  2014: 11.39,
  2015: -0.73,
  2016: 9.54,
  2017: 19.42,
  2018: -6.24,
  2019: 28.88,
  2020: 16.26,
  2021: 26.89,
  2022: -18.11,
  2023: 24.23,
  2024: 25.02,
  2025: 8.44,
};

const nasdaqReturns = {
  1998: 85.3,
  1999: 101.95,
  2000: -36.84,
  2001: -32.65,
  2002: -37.58,
  2003: 49.12,
  2004: 10.44,
  2005: 1.49,
  2006: 6.79,
  2007: 18.67,
  2008: -41.89,
  2009: 53.54,
  2010: 19.22,
  2011: 2.7,
  2012: 16.82,
  2013: 34.99,
  2014: 17.94,
  2015: 8.43,
  2016: 5.89,
  2017: 31.52,
  2018: -1.04,
  2019: 37.96,
  2020: 47.58,
  2021: 26.63,
  2022: -32.97,
  2023: 53.81,
  2024: 24.88,
  2025: 10.66,
};

function IndexCalculator() {
  const [isFocused, setIsFocused] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [data, setData] = useState({
    standardIndex: "sp500",
    initial1: 1000000,
    withdrawalRate1: 0,
    feeRate1: 1,
    contribution1: 0,
    initial2: 1000000,
    withdrawalRate2: 0,
    feeRate2: 0,
    participationRate: 100,
    capRate: 10,
    floorRate: 0,
    contribution2: 0,
  });

  const isCheckedHandler = (event) => {
    setIsChecked(event.target.checked);
  };

  const [table1, setTable1] = useState([]);
  const [table2, setTable2] = useState([]);
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    if (isChecked ? runCalculationTwo() : runCalculations());
  }, [data, isChecked]);

  const getReturns = () =>
    data.standardIndex === "nasdaq" ? nasdaqReturns : sp500Returns;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value || 0,
    }));
  };

  const runCalculations = () => {
    const returns = getReturns();
    const years = Object.keys(returns);

    let {
      initial1,
      withdrawalRate1,
      feeRate1,
      contribution1,
      initial2,
      withdrawalRate2,
      feeRate2,
      participationRate,
      capRate,
      floorRate,
      contribution2,
    } = data;

    withdrawalRate1 /= 100;
    feeRate1 /= 100;
    withdrawalRate2 /= 100;
    feeRate2 /= 100;
    participationRate /= 100;
    capRate /= 100;
    floorRate /= 100;

    let b1 = initial1,
      b1No = initial1,
      b2 = initial2,
      b2No = initial2;

    let t1 = [],
      t2 = [],
      c1 = [],
      c2 = [];

    let w1Total = 0,
      w2Total = 0,
      r1Total = 0,
      r2Total = 0;

    for (let y of years) {
      let r = returns[y] / 100;
      const w1 = b1 * withdrawalRate1;
      b1 = (b1 - w1 + contribution1) * (1 - feeRate1) * (1 + r);
      b1No = (b1No + contribution1) * (1 + r);
      w1Total += w1;
      r1Total += r;

      let adjR = Math.max(floorRate, Math.min(r * participationRate, capRate));
      const w2 = b2 * withdrawalRate2;
      b2 = (b2 - w2 + contribution2) * (1 - feeRate2) * (1 + adjR);
      b2No = (b2No + contribution2) * (1 + adjR);
      w2Total += w2;
      r2Total += adjR;

      t1.push({
        year: y,
        return: r,
        balance: b1,
        withdrawn: w1,
        noWithdraw: b1No,
      });

      t2.push({
        year: y,
        return: adjR,
        balance: b2,
        withdrawn: w2,
        noWithdraw: b2No,
      });

      c1.push(b1No.toFixed(2));
      c2.push(b2No.toFixed(2));
    }

    t1.push({
      year: "Avg",
      return: r1Total / years.length,
      balance: b1,
      withdrawn: w1Total,
      noWithdraw: b1No,
    });

    t2.push({
      year: "Avg",
      return: r2Total / years.length,
      balance: b2,
      withdrawn: w2Total,
      noWithdraw: b2No,
    });

    setTable1(t1);
    setTable2(t2);
    setChartData({
      labels: years,

      datasets: [
        {
          label: "Standard Strategy",
          data: c1,
          borderColor: "green",
          fill: false,
        },

        {
          label: "Cap + Floor Strategy",
          data: c2,
          borderColor: "orange",
          fill: false,
        },
      ],
    });
  };

  const calculate2YearReturns = (data, cap, floor, participation) => {
    const years = Object.keys(data).map(Number);
    const result = {};
    for (let i = 0; i < years.length; i += 2) {
      const y1 = years[i],
        y2 = years[i + 1];
      const r1 = data[y1] || 0,
        r2 = data[y2] || 0;
      const gross = (1 + r1 / 100) * (1 + r2 / 100) - 1;
      const adjusted = Math.max(
        floor / 100,
        Math.min(gross * participation, cap / 100)
      );
      result[y1] = 0;
      result[y2] = adjusted;
    }
    return result;
  };

  const runCalculationTwo = () => {
    const returns = getReturns();
    const adjustedReturns = calculate2YearReturns(
      returns,
      data.capRate,
      data.floorRate / 100,
      data.participationRate / 100
    );
    const years = Object.keys(adjustedReturns);

    let { initial2, withdrawalRate2, feeRate2, contribution2 } = data;

    withdrawalRate2 /= 100;
    feeRate2 /= 100;

    let b2 = initial2,
      b2No = initial2;

    let t2 = [],
      c2 = [];

    let w2Total = 0,
      r2Total = 0;

    for (let y of years) {
      let adjR = adjustedReturns[y];

      const w2 = b2 * withdrawalRate2;
      b2 = (b2 - w2 + contribution2) * (1 - feeRate2) * (1 + adjR);
      b2No = (b2No + contribution2) * (1 + adjR);
      w2Total += w2;
      r2Total += adjR;

      t2.push({
        year: y,
        return: adjR,
        balance: b2,
        withdrawn: w2,
        noWithdraw: b2No,
      });

      c2.push(b2No.toFixed(2));
    }

    t2.push({
      year: "Avg",
      return: r2Total / years.length,
      balance: b2.toLocaleString(2),
      withdrawn: w2Total,
      noWithdraw: b2No,
    });

    setTable2(t2);
    setChartData({
      labels: years,
      datasets: [
        {
          label: "Cap + Floor Strategy",
          data: c2,
          borderColor: "orange",
          fill: false,
        },
      ],
    });
  };

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <h2>Lionguard Financial Index Calculator</h2>
      </div>

      <div className={classes.printContainer}>
        <button className={classes.printButton} onClick={() => window.print()}>
          <PrintIcon /> Print / Save PDF
        </button>
      </div>

      <div className={classes.calculatorContainer}>
        <div className={classes.standardIndexContainer}>
          <h3>Standard Index</h3>
          <div>
            <label>
              Standard Index:
              <select
                className={classes.indexSelector}
                name="standardIndex"
                value={data.standardIndex}
                onChange={handleChange}
              >
                <option value="sp500">S&P 500</option>
                <option value="nasdaq">NASDAQ-100</option>
              </select>
            </label>
          </div>
          <div>
            <label>
              Initial Balance ($):{" "}
              <input
                type="text"
                name="initial1"
                value={
                  isFocused
                    ? data.initial1.toString()
                    : "$" + data.initial1.toLocaleString()
                }
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                onChange={handleChange}
              />
            </label>
          </div>

          <label>
            Annual Withdrawal Rate (%):{" "}
            <input
              type="number"
              name="withdrawalRate1"
              value={data.withdrawalRate1}
              onChange={handleChange}
            />
          </label>

          <label>
            Annual Fee (%):{" "}
            <input
              type="number"
              name="feeRate1"
              value={data.feeRate1}
              onChange={handleChange}
            />
          </label>

          <label>
            Yearly Contribution ($):{" "}
            <input
              type="text"
              name="contribution1"
              value={
                isFocused
                  ? data.contribution1.toString()
                  : "$" + data.contribution1.toLocaleString()
              }
              onChange={handleChange}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />
          </label>
        </div>

        <div className={classes.participationContainer}>
          <h3>Cap + Participation Strategy</h3>

          <label>
            Initial Balance ($):
            <span style={{ marginLeft: "20px" }}>
              1YR
              <Switch checked={isChecked} onChange={isCheckedHandler} />
              2YR
            </span>
            <input
              type="number"
              name="initial2"
              value={
                isFocused
                  ? data.initial2.toString()
                  : "$" + data.initial2.toLocaleString()
              }
              onChange={handleChange}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />
          </label>

          <label>
            Annual Withdrawal Rate (%):{" "}
            <input
              type="number"
              name="withdrawalRate2"
              value={data.withdrawalRate2}
              onChange={handleChange}
            />
          </label>

          <label>
            Annual Fee/Charge (%):{" "}
            <input
              type="number"
              name="feeRate2"
              value={data.feeRate2}
              onChange={handleChange}
            />
          </label>
          <div style={{ display: "flex" }}>
            <label>
              Participation Rate (%):{" "}
              <input
                type="number"
                name="participationRate"
                value={data.participationRate}
                onChange={handleChange}
              />
            </label>

            <label>
              Cap on Returns (%):{" "}
              <input
                type="number"
                name="capRate"
                value={data.capRate}
                onChange={handleChange}
              />
            </label>

            <label>
              Floor on Returns (%):{" "}
              <input
                type="number"
                name="floorRate"
                value={data.floorRate}
                onChange={handleChange}
              />
            </label>
          </div>

          <label>
            Yearly Contribution ($):{" "}
            <input
              type="number"
              name="contribution2"
              value={data.contribution2}
              onChange={handleChange}
            />
          </label>
        </div>
      </div>

      <div className={classes.resultsContainer}>
        {[table1, table2].map((table, idx) => (
          <table className={classes.tableContainer} key={idx}>
            <thead>
              <tr>
                <th>Year</th>
                <th>{idx === 0 ? "Return (%)" : "Capped Return (%)"}</th>
                <th>Balance (With Withdrawal)</th>
                <th>Withdrawn</th>
                <th>Balance (No Withdrawal)</th>
              </tr>
            </thead>

            <tbody className={classes.stripedTable}>
              {table.map((row, i) => (
                <tr key={i}>
                  <td>{row.year}</td>
                  <td style={{ color: row.return > 0 ? "green" : "red" }}>
                    {(row.return * 100).toFixed(2)}
                  </td>
                  <td>
                    $
                    {row.balance.toLocaleString(undefined, {
                      maximumFractionDigits: 0,
                    })}
                  </td>
                  <td>
                    $
                    {row.withdrawn.toLocaleString(undefined, {
                      maximumFractionDigits: 0,
                    })}
                  </td>
                  <td>
                    $
                    {row.noWithdraw.toLocaleString(undefined, {
                      maximumFractionDigits: 0,
                    })}
                  </td>
                </tr>
              ))}
              {table.length > 0 && (
                <tr>
                  <th>Average Return</th>
                  <td>{(table.at(-1).return * 100).toFixed(2)}%</td>
                  <td>
                    Total Withdrawn: ${table.at(-1).withdrawn.toLocaleString()}
                  </td>
                  <td colSpan="2">
                    Final Balance: ${table.at(-1).balance.toLocaleString()}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        ))}
      </div>

      <h3 className={classes.chartHeading}>Growth Comparison Chart</h3>
      <canvas id={chartData}> {/*<Line data={chartData} />*/}</canvas>
      <p className={classes.disclaimer}>
        Disclaimer: This calculator uses historical data from 1998–2024. Past
        performance does not guarantee future results. This is for educational
        use only.
      </p>
    </div>
  );
}

export default IndexCalculator;
