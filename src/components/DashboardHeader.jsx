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
    <button className="w-full text-2xl bg-my-color-5 rounded-sm pb-2 flex items-center justify-center hover:bg-my-color-6">
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
  const percentage = Math.round(totalSum / datas.length + 1) * 100;

  const btnsData = [
    {
      text: "Add",
      styles:
        "bg-my-color-5 p-2 rounded-sm text-my-color-1 hover:bg-my-color-6 w-full",
      icon: <Add />,
    },
    {
      text: "Send",
      styles:
        "bg-my-color-5 p-2 rounded-sm text-my-color-1 hover:bg-my-color-6 w-full",
      icon: <ArrowUpward />,
    },
    {
      text: "Request",
      styles:
        "bg-my-color-5 p-2 rounded-sm text-my-color-1 hover:bg-my-color-6 w-full",
      icon: <Loop />,
    },
    { text: "", styles: "", icon: "" },
  ];
  return (
    <div className="flex flex-col gap-3">
      {/* Header section */}

      <div className="form w-full flex flex-col sm:flex-row items-center justify-between text-my-color-8">
        {/* input and search icon */}
        <div className="w-full flex border justify-between border-my-color-6 rounded-sm sm:w-40">
          <div className="w-9/12 rounded-r relative p-2">
            <span className="w-1/10 bg-my-color-6 text-my-color-3 p-2">
              <Search />
            </span>
            <input
              type="text"
              placeholder="Search..."
              className="border-none outline-none w-10/12 px-1 placeholder:text-my-color-8"
            />
          </div>

          <span className="text-sm w-1/10 flex items-center justify-center border">
            <KeyboardCommandKey />
            +F
          </span>
        </div>

        <div className="flex flex-col justify-end py-2 gap-2 sm:gap-4 w-full sm:w-50 sm:flex-row ">
          <div className="border border-my-color-6 rounded-sm flex items-center justify-center">
            <div className="border-r flex gap-1 border-my-color-8 relative">
              <span className="text-sm h-full flex items-center justify-center bg-my-color-6 p-2 text-my-color-3">
                <CalendarMonth />
              </span>
              <input
                type="date"
                name="date"
                id="date-range"
                className="border-none outline-none bg-white"
              />
            </div>
            <div>
              <select
                name="range"
                id=""
                className="border-none outline-none bg-white"
              >
                <option value="">Last 7 days</option>
                <option value="">Last 30 days</option>
                <option value="">Last 3 months</option>
                <option value="">Last 6 months</option>
                <option value="">One year ago</option>
              </select>
            </div>
          </div>

          <div className="">
            <button
              className="bg-my-color-6 rounded-sm p-2 w-4/6 bg-   
             text-my-color-1 flex gap-1 sm:w-fit text-center"
            >
              <CloudUpload />
              Export
            </button>
          </div>
        </div>
      </div>

      <div className="bg-my-color-8 border-2 border-my-color-2 gap-2 flex flex-col items-start justify-between p-3 rounded-md sm:flex-row sm:gap-6 sm:items-center">
        <div>
          <p className="font-bold">Total Balance</p>
          <div className="flex items-center justify-start">
            <h1 className="text-4xl md:text-5xl">
              {totalSum}
              <span className="text-sm">
                {percentage}
                <NorthEast />
              </span>
            </h1>
          </div>
        </div>
        {/* flex gap-2 items-center justify-between */}
        <div className="w-full grid grid-cols-4 gap-2 sm:w-50">
          {btnsData.map((data) => {
            return <Button btnData={data} icon={data.icon} key={data.text} />;
          })}
        </div>
      </div>
    </div>
  );
}
export default Header;
