import {
  CalendarMonth,
  Search,
  CloudUpload,
  KeyboardCommandKey,
  NorthEast,
  Add,
  ArrowUpward,
  Loop,
  Settings,
} from "@mui/icons-material";

function Button({ btnData, icon }) {
  return btnData.text.length === 0 ? (
    <button className="w-16 text-2xl bg-my-color-5 rounded-sm pb-2 flex items-center justify-center hover:bg-my-color-6">
      ...
    </button>
  ) : (
    <button className={btnData.styles}>
      {icon}
      {btnData.text}
    </button>
  );
}

function Header({ datas, currencyFormater }) {
  const totalSum = currencyFormater(
    datas.map((data) => data.profit).reduce((a, p) => (a += p))
  );
  const percentage = Math.round((totalSum / datas.length + 1) * 100);

  const btnsData = [
    {
      text: "Add",
      styles:
        "bg-my-color-5 p-2 rounded-sm text-my-color-1 hover:bg-my-color-6",
      icon: <Add />,
    },
    {
      text: "Send",
      styles:
        "bg-my-color-5 p-2 rounded-sm text-my-color-1 hover:bg-my-color-6",
      icon: <ArrowUpward />,
    },
    {
      text: "Request",
      styles:
        "bg-my-color-5 p-2 rounded-sm text-my-color-1 hover:bg-my-color-6",
      icon: <Loop />,
    },
    { text: "", styles: "", icon: "" },
  ];
  return (
    <div className="gap-4 flex flex-col">
      <div className="form w-full flex items-center justify-between text-my-color-8">
        <div className="border border-my-color-8 rounded-sm px-1">
          <div className="inputGroup">
            <span>
              <Search />
            </span>
            <input
              type="text"
              placeholder="Search..."
              className="border-none outline-none"
            />
            <span>
              <KeyboardCommandKey />
              +F
            </span>
          </div>
        </div>

        <div className="flex flex-row justify-between p-1 gap-18">
          <div className="border border-my-color-8 rounded-sm  flex items-center justify-center">
            <div className="p-1 border-r border-my-color-8">
              <CalendarMonth />
              <input
                type="date"
                name="date"
                id="date-range"
                className="border-none"
              />
            </div>
            <div>
              <select name="range" id="" className="">
                <option value="">Last 7 days</option>
                <option value="">Last 30 days</option>
                <option value="">Last 3 months</option>
                <option value="">Last 6 months</option>
                <option value="">One year ago</option>
              </select>
            </div>
          </div>

          <div className="px-2">
            <button className="bg-my-color-6 rounded-sm p-1 text-my-color-1 flex gap-1">
              <CloudUpload />
              Export
            </button>
          </div>
        </div>
      </div>
      <div className="balance bg-my-color-8 w-full flex items-center justify-between rounded-md p-4">
        <div>
          <p className="font-bold">Total Balance</p>
          <div className="flex items-center justify-start">
            <h1 className="text-5xl">
              {totalSum}
              <span className="text-sm">
                {percentage}
                <NorthEast />
              </span>
            </h1>
          </div>
        </div>
        <div className=" flex gap-2 items-center justify-items-end">
          {btnsData.map((data) => {
            return <Button btnData={data} icon={data.icon} key={data.text} />;
          })}
        </div>
      </div>
    </div>
  );
}
export default Header;
