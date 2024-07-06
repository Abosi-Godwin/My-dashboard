import "lord-icon-element";
import { WidgetsOutlined } from "@mui/icons-material";

function ListItem({ item, index, linksIcons }) {
  return (
    <li
      key={item}
      className="nav-link w-full flex items-start justify-between rounded-sm px-2 text-sm hover:bg-my-color-7"
    >
      <a href="" className="flex items-center justify-between gap-1">
        <lord-icon
          className="lord-icon"
          src={`https://cdn.lordicon.com/${linksIcons[index]}.json`}
          trigger="hover"
          target=".nav-link"
          loading="lazy"
          colors="primary:#ffffff"
        ></lord-icon>{" "}
        {item}
      </a>
    </li>
  );
}

export default function Nav({ currencyFormater }) {
  const generalLinks = ["Dashboard", "Payment", "Transaction", "Cards"];
  const generalLinksIcons = ["xfyxpoer", "gjjvytyq", "dafdkyyt", "xuyycdjx"];
  const supportLinks = [
    "Capital",
    "Vaults",
    "Reports",
    `Earn ${currencyFormater(150)}`,
  ];
  const supportLinksIcons = ["ncitidvz", "sbrtyqxj", "xljvqlng", "uwinmnkh"];
  const tweakLinks = ["Settings", "Help", "Pro Mode"];
  const tweakLinksIcons = ["ifsxxxte", "ojnjgkun", "fnxnvref"];

  return (
    <div className="h-auto w-1/10 bg-my-color-8 px-3">
      <div className="logo w-full flex items-center justify-between p-3">
        <p className="font-bold">SEQUENCE</p>
        <WidgetsOutlined />
      </div>
      <hr />
      <div className="general flex flex-col gap-2 py-2">
        <p className="font-thin uppercase text-sm">General</p>
        <ul className="flex flex-col gap-2">
          {generalLinks.map((link, index) => (
            <ListItem
              key={link}
              item={link}
              index={index}
              linksIcons={generalLinksIcons}
            />
          ))}
        </ul>
      </div>{" "}
      <div className="support flex flex-col gap-2 py-2">
        <p className="font-thin uppercase text-sm">Support</p>
        <ul className="flex flex-col gap-2">
          {supportLinks.map((link, index) => (
            <ListItem
              key={link}
              item={link}
              index={index}
              linksIcons={supportLinksIcons}
            />
          ))}
        </ul>
      </div>
      <div className="support flex flex-col gap-2 py-2">
        <p className="font-thin uppercase text-sm">Tweak</p>
        <ul className="flex flex-col gap-2">
          {tweakLinks.map((link, index) => (
            <ListItem
              key={link}
              item={link}
              index={index}
              linksIcons={tweakLinksIcons}
            />
          ))}
        </ul>
      </div>
      <div className="user flex flex-row w-full gap-2 items-center justify-center bg-my-color-7 rounded-sm px-1">
        <div>
          <img
            src="./src/assets/profile.jpg"
            alt="profile image"
            className="w-7 h-7 rounded-lg"
          />
        </div>
        <div className="flex-col flex">
          <p className="text-sm">Abosi Godwin</p>
          <p className="font-light text-xs">bbnl6060@gmail.com</p>
        </div>
      </div>
    </div>
  );
}
