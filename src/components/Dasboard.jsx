import Header from "./DashboardHeader";
import BarChart from "./BarChart";
import { datas } from "./datas";
function Dashboard({ currencyFormater }) {
  return (
    <div className="w-full sm:w-9/10 sm:bg-white">
      <header className="flex p-2 gap-6 flex-col h-screen">
        <Header datas={datas} currencyFormater={currencyFormater} />
        <BarChart datas={datas} />
      </header>
    </div>
  );
}

export default Dashboard;
