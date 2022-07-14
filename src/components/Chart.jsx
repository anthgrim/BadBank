import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const Chart = ({ chartData }) => {
  return <Bar data={chartData} />;
};

export default Chart;
