import Header from "./DashboardHeader";
import BarChart from "./BarChart";
import { datas } from "./datas";
function Dashboard({ currencyFormater }) {
  return (
    <div className="bg-white w-9/10 p-5 flex flex-col gap-4">
      <Header datas={datas} currencyFormater={currencyFormater} />
      <BarChart datas={datas} />
    </div>
  );
}

export default Dashboard;
