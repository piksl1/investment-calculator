import Header from "./components/Header";
import DataFetching from "./components/DataFetching";
import ResTable from "./components/ResTable";
import { useState } from "react";
function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });
  const handleInputChange = (inputIdentifier, newValue) => {
    setUserInput((prev) => ({
      ...prev,
      [inputIdentifier]: +newValue,
    }));
  };
  const inputIsValid = userInput.duration >= 1;
  return (
    <>
      <Header />
      <DataFetching userInput={userInput} onChange={handleInputChange} />
      {!inputIsValid && <p className="center">Please enter a valid number</p>}
      {inputIsValid && <ResTable userInput={userInput} />}
    </>
  );
}

export default App;
