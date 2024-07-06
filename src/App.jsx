import "./App.css";
import "./styles/tailwind.css";
import "lord-icon-element";
import lottie from "lottie-web";
import { defineElement } from "@lordicon/element";
import Nav from "./components/Nav";
import Dashboard from "./components/Dasboard";

// define "lord-icon" custom element with default properties
defineElement(lottie.loadAnimation);

function formatCurrency(number) {
  console.log(number);
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(number);
}

function App() {
  return (
    <>
      <Nav currencyFormater={formatCurrency} />
      <Dashboard currencyFormater={formatCurrency} />
    </>
  );
}

export default App;
