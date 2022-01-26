import ChartBar from "./ChartBar";
import "./Chart.css";
const Chart = (props) => {

  const expenseAmounts = props.dataPoints.map(datapoint => datapoint.value);
  const maxAmount = Math.max(...expenseAmounts);
  return (
    <div className="chart">
      {props.dataPoints.map((datapoint) => (
        <ChartBar
          key={datapoint.label}
          value={datapoint.value}
          maxValue={maxAmount}
          label={datapoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
