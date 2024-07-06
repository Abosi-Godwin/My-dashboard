// BarChart.js
import { Settings } from "@mui/icons-material";
import { Chart as chartJs, defaults, plugins } from "chart.js/auto";
import { Bar } from "react-chartjs-2";
defaults.maintainAspectRatio = false;
defaults.responsive = true;

function BarChart({ datas }) {
  const datesLabel = datas.map((data) => data.day);
  const expenses = datas.map((data) => data.expenses);
  const revenue = datas.map((data) => data.revenue);

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="h-96 p-2 border text-my-color-4 border-my-color-8 rounded-md">
      <div className="w-full flex justify-between">
        <div>
          <h5>Cash flow</h5>
        </div>
        <div className="flex items-center justify-between gap-4">
          <div className="flex gap bg-my-color-1 rounded-sm">
            <button className="p-1 text-my-color-4 hover:bg-my-color-4 hover:text-my-color-1 hover:rounded-sm">
              Monthly
            </button>
            <button className="p-1 text-my-color-4 hover:bg-my-color-4 hover:text-my-color-1 hover:rounded-sm">
              Weekly
            </button>
          </div>
          <div className="bg-my-color-1">
            <button className="p-1 text-my-color-4 hover:bg-my-color-4 hover:text-my-color-1 hover:rounded-sm">
              <Settings />
              manage
            </button>
          </div>
        </div>
      </div>
      <Bar
        data={{
          labels: datesLabel,
          datasets: [
            {
              label: "Monthly Sales",
              data: revenue,
              borderRadius: 9,
              label: "Revenue",
              backgroundColor: "#1B6189",
            },
            {
              label: "Monthly Sales",
              data: expenses,
              borderRadius: 9,
              label: "Cost",
              backgroundColor: "#90CBE9",
            },
          ],
        }}
        options={options}
      />
    </div>
  );
}

export default BarChart;
