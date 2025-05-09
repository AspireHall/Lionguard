import { useEffect, useRef, useState } from "react";
import { Chart } from "chart.js/auto";
import "./FeeImpactChart.module.css";

const FeeImpactChart = () => {
  const canvasRef = useRef(null);
  const chartRef = useRef(null);
  const [formData, setFormData] = useState({
    currentAge: 30,
    retirementAge: 65,
    lumpSum: 0,
    monthly: 100,
    interestRate: 10,
    fees: 1,
  });

  const [results, setResults] = useState({
    totalContributions: 0,
    totalInterest: 0,
    finalNoFees: 0,
    finalWithFees: 0,
    totalFees: 0,
    feeImpact: "",
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: +value }));
  };

  useEffect(() => {
    const { currentAge, retirementAge, lumpSum, monthly, interestRate, fees } =
      formData;

    const years = retirementAge - currentAge;
    let balanceNoFees = lumpSum;
    let balanceWithFees = lumpSum;
    let totalFees = 0;
    let totalContributions = 0;
    let labels = [];
    let dataNoFees = [];
    let dataWithFees = [];
    let difference = [];

    // for Calculating fees
    for (let i = 1; i <= years; i++) {
      balanceNoFees += monthly * 12;
      balanceWithFees += monthly * 12;
      balanceNoFees += balanceNoFees * (interestRate / 100);
      balanceWithFees += balanceWithFees * (interestRate / 100);

      const annualFees = balanceWithFees * (fees / 100);
      balanceWithFees -= annualFees;
      totalFees += annualFees;
      totalContributions += monthly * 12;

      labels.push(i + currentAge);
      dataNoFees.push(balanceNoFees);
      dataWithFees.push(balanceWithFees);
      difference.push(balanceNoFees - balanceWithFees);
    }

    const finalNoFees = balanceNoFees;
    const finalWithFees = balanceWithFees;
    const feeImpactValue = finalNoFees - finalWithFees;
    const feeImpactPercentage = (feeImpactValue / finalNoFees) * 100;

    setResults({
      totalContributions,
      totalInterest: finalNoFees - totalContributions,
      finalNoFees,
      finalWithFees,
      totalFees,

      feeImpact: `${feeImpactValue.toLocaleString(undefined, {
        maximumFractionDigits: 2,
      })} (${feeImpactPercentage.toFixed(2)}% of potential value)`,
    });

    if (chartRef.current) {
      chartRef.current.destroy();
    }

    chartRef.current = new Chart(canvasRef.current.getContext("2d"), {
      type: "line",
      data: {
        labels,
        datasets: [
          {
            label: "Account Value Without Fees",
            data: dataNoFees,
            borderColor: "#3498db",
            backgroundColor: "rgba(52, 152, 219, 0.2)",
            fill: true,
            tension: 0.4,
          },

          {
            label: "Account Value With Fees",
            data: dataWithFees,
            borderColor: "#e74c3c",
            backgroundColor: "rgba(231, 76, 60, 0.2)",
            fill: true,
            tension: 0.4,
          },
        ],
      },

      options: {
        responsive: true,
        plugins: {
          tooltip: {
            callbacks: {
              title: (tooltipItem) => "Age: " + tooltipItem[0].label,
              label: (tooltipItem) => {
                const i = tooltipItem.dataIndex;

                return [
                  `No Fees: $${dataNoFees[i].toLocaleString()}`,
                  `With Fees: $${dataWithFees[i].toFixed(2).toLocaleString()}`,
                  `Difference: $${difference[i].toLocaleString()}`,
                ];
              },
            },
          },
        },

        scales: {
          x: { title: { display: true, text: "Age" } },
          y: {
            title: { display: true, text: "Account Value ($)" },
            ticks: {
              callback: (value) => "$" + value.toLocaleString(),
            },
          },
        },
      },
    });
  }, [formData]);
  return (
    <div className="page-wrapper">
      <header>
        <h1>LionGuard Financial Calculator</h1>
      </header>
      <main>
        <div className="form-section">
          <div className="space" style={{ marginTop: "69px" }}></div>
          <form>
            <label htmlFor="currentAge">Current Age</label>
            <input
              type="number"
              id="currentAge"
              value={formData.currentAge}
              onChange={handleInputChange}
            />
            <p>Enter your current age to see the growth potential over time.</p>
            <label htmlFor="retirementAge">Retirement Age</label>
            <input
              type="number"
              id="retirementAge"
              value={formData.retirementAge}
              onChange={handleInputChange}
            />
            <p>Standard retirement age; you can adjust based on your plan.</p>
            <label htmlFor="lumpSum">Initial Lump Sum ($)</label>
            <input
              type="number"
              id="lumpSum"
              value={formData.lumpSum}
              onChange={handleInputChange}
            />
            <p>If none, leave at 0.</p>
            <label htmlFor="monthly">Monthly Contributions ($)</label>
            <input
              type="number"
              id="monthly"
              value={formData.monthly}
              onChange={handleInputChange}
            />
            <p>Consistent contributions help build wealth over time.</p>
            <label htmlFor="interestRate">Expected Annual Return (%)</label>
            <input
              type="number"
              id="interestRate"
              value={formData.interestRate}
              onChange={handleInputChange}
            />
            <p>Adjust based on your target market return.</p>
            <label htmlFor="fees">Management Fees (%)</label>
            <input
              type="number"
              id="fees"
              value={formData.fees}
              onChange={handleInputChange}
            />
            <p>1% is typical, but lower fees are better.</p>
          </form>
        </div>
        <div className="results-section">
          <h2>
            <strong>Results</strong>
          </h2>
          <div className="result-field">
            <label>
              <strong>Total Contributions</strong>
            </label>
            <input
              type="text"
              readOnly
              value={results.totalContributions.toLocaleString()}
            />
          </div>
          <div className="result-field">
            <label>
              <strong>Total Interest Earned</strong>
            </label>
            <input
              type="text"
              readOnly
              value={results.totalInterest.toLocaleString()}
            />
          </div>
          <div className="chart-description">
            Side-by-side comparison of your wealth with and without fees.
          </div>
          <div
            style={{
              width: "auto",
              height: "auto",
              marginBottom: "50px",
              justifyContent: "space-between",
            }}
          >
            <div className="chart-container">
              <canvas ref={canvasRef}></canvas>
            </div>
          </div>
          <div className="chart-results">
            <div className="result-field">
              <label>
                <strong>Total Projected Account Without Fees</strong>
              </label>
              <input
                style={{ color: "green" }}
                type="text"
                readOnly
                value={
                  "$" + Number(results.finalNoFees.toFixed(2)).toLocaleString()
                }
              />
            </div>
            <div className="result-field">
              <label>
                <strong>Total Projected Account With Fees</strong>
              </label>
              <input
                style={{ color: "red" }}
                type="text"
                readOnly
                value={
                  "$" +
                  Number(results.finalWithFees.toFixed(2)).toLocaleString()
                }
              />
            </div>
          </div>
          <span>
            <strong>Total Fees ($)</strong>
          </span>
          <input
            style={{ color: "red" }}
            type="text"
            readOnly
            className="total-fees-input"
            value={"$" + Number(results.totalFees.toFixed(2)).toLocaleString()}
          />
          <p>Total paid in fees over your contribution period.</p>
          <span>
            <strong>Impact of Fees ($)</strong>
          </span>
          <input
            style={{ color: "red" }}
            type="text"
            readOnly
            className="impact-of-fees"
            value={"$" + results.feeImpact.toLocaleString()}
          />
          <p>This includes both direct fees and lost compounding.</p>
          <p className="disclaimer">
            Educational Purposes Only: This premium financial calculator
            illustrates the power of compound growth. Projections are not
            guarantees. Use this as a planning tool.
          </p>
        </div>
      </main>
    </div>
  );
};

export default FeeImpactChart;
