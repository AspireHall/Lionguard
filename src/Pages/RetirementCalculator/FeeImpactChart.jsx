import classes from "./FeeImpactChart.module.css";
import { useEffect, useRef, useState } from "react";
import { Chart } from "chart.js/auto";
import CrosshairPlugin from "chartjs-plugin-crosshair";

const FeeImpactChart = () => {
  const canvasRef = useRef(null);
  const chartRef = useRef(null);

  const [formData, setFormData] = useState({
    currentAge: 0,
    retirementAge: 65,
    lumpSum: 0,
    monthly: 100,
    interestRate: 7.5,
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
    Chart.register(CrosshairPlugin);
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
          crosshair: {
            line: {
              color: "#333",
              width: 0.5,
            },
            sync: {
              enable: false,
            },
            zoom: {
              enabled: false,
            },
          },

          tooltip: {
            enabled: true,
            mode: "index",
            intersect: false,
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
        hover: {
          mode: "nearest",
          intersect: false,
          axis: "xy",
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
    <div className={classes.mainContainer}>
      <header className={classes.header}>
        <h1>Lionguard Financial Calculator</h1>
      </header>
      <main className={classes.mainSection}>
        <div className={classes.leftContainer}>
          <div className={classes.formSection}>
            <div className="space" style={{ marginTop: "69px" }}></div>
            <form className={classes.formSection}>
              <label className={classes.label} htmlFor="currentAge">
                Current Age
              </label>
              <input
                className={classes.input}
                type="number"
                id="currentAge"
                placeholder={formData.currentAge}
                value={setFormData.currentAge}
                onChange={handleInputChange}
              />
              <p>
                Enter your current age to see the growth potential over time.
              </p>
              <label className={classes.label} htmlFor="retirementAge">
                Retirement Age
              </label>
              <input
                className={classes.input}
                type="number"
                id="retirementAge"
                placeholder={formData.retirementAge}
                value={setFormData.retirementAge}
                onChange={handleInputChange}
              />
              <p>
                65 is the standard retirement age in many countries, though you
                may choose to retire earlier or later based on your financial
                situation.
              </p>
              <label className={classes.label} htmlFor="lumpSum">
                Initial Lump Sum ($)
              </label>
              <input
                className={classes.input}
                type="number"
                id="lumpSum"
                value={setFormData.lumpSum}
                onChange={handleInputChange}
              />
              <p>
                The initial investment you start with. If you don&apos;t have
                one, enter 0.
              </p>
              <label className={classes.label} htmlFor="monthly">
                Monthly Contributions ($)
              </label>
              <input
                className={classes.input}
                type="number"
                id="monthly"
                value={setFormData.monthly}
                placeholder={formData.monthly}
                onChange={handleInputChange}
              />
              <p>
                Regular monthly contributions are key to building wealth over
                time through dollar-cost averaging and compound growth.
              </p>
              <label className={classes.label} htmlFor="interestRate">
                Expected Annual Return (%)
              </label>
              <input
                className={classes.input}
                type="number"
                id="interestRate"
                placeholder={formData.interestRate}
                value={setFormData.interestRate}
                onChange={handleInputChange}
              />
              <p>
                7.5% is used as a default based on historical market
                performance, but you can adjust this based on your expected
                returns.
              </p>
              <label className={classes.label} htmlFor="fees">
                Management Fees (%)
              </label>
              <input
                className={classes.input}
                type="number"
                id="fees"
                placeholder={formData.fees}
                value={setFormData.fees}
                onChange={handleInputChange}
              />
              <p>
                1% is a typical management fee charged by 401k&apos;s, financial
                advisors, and funds. Lower fees can significantly boost your
                returns over time.
              </p>
              <span>
                <strong>Total Fees ($)</strong>
              </span>
              <input
                style={{ color: "red" }}
                type="text"
                readOnly
                className={classes.input}
                value={
                  "$" + Number(results.totalFees.toFixed(2)).toLocaleString()
                }
              />
              <p>
                This represents the total amount paid in fees over your
                contribution period.
              </p>
              <span>
                <strong>Impact of Fees ($)</strong>
              </span>
              <input
                className={classes.input}
                style={{ color: "red" }}
                type="text"
                readOnly
                value={"$" + results.feeImpact.toLocaleString()}
              />
              <p>
                The total amount of money lost to fees over time, including both
                the direct fee payments and the lost compound growth on those
                fees.
              </p>
              <p></p>
            </form>
          </div>
        </div>
        <div className={classes.rightContainer}>
          <div className={classes.resultSection}>
            <h2>
              <strong>Results</strong>
            </h2>
            <div className={classes.resultField}>
              <label className={classes.label}>
                <strong>Total Contributions</strong>
              </label>
              <input
                className={classes.input}
                type="text"
                readOnly
                value={
                  "$" +
                  Number(results.totalContributions.toFixed(2)).toLocaleString()
                }
              />
            </div>
            <p></p>
            <div className={classes.resultField}>
              <label className={classes.label}>
                <strong>Total Interest Earned</strong>
              </label>
              <input
                className={classes.input}
                type="text"
                readOnly
                value={
                  "$" +
                  Number(results.totalInterest.toFixed(2)).toLocaleString()
                }
              />
            </div>
            <div className={classes.chartDescription}>
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
              <div className={classes.chartResults}>
                <canvas ref={canvasRef}></canvas>
              </div>
            </div>
            <div className={classes.chartResults}>
              <div className={classes.resultField}>
                <label className={classes.label}>
                  <strong>Total Projected Account Without Fees</strong>
                </label>
                <input
                  className={classes.input}
                  style={{ color: "green" }}
                  type="text"
                  readOnly
                  value={
                    "$" +
                    Number(results.finalNoFees.toFixed(2)).toLocaleString()
                  }
                />
              </div>
              <p></p>
              <div className={classes.resultField}>
                <label className={classes.label}>
                  <strong>Total Projected Account With Fees</strong>
                </label>
                <input
                  className={classes.input}
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

            <p className={classes.disclaimer}>
              <strong>
                Educational Purposes Only: This premium financial calculator is
                designed to illustrate the power of compound growth and help you
                visualize your financial journey. The projections shown are
                based on consistent returns and should be used as a planning
                tool rather than a guarantee of future performance. LionGuard is
                committed to providing you with the insights needed to make
                informed financial decisions for a secure future.
              </strong>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FeeImpactChart;
