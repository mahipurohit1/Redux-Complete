import { useState } from "react";
import { Container } from "semantic-ui-react";
import "./App.css";
import DisplayBalance from "./components/DisplayBalance";
import DisplayBalances from "./components/DisplayBalances";
import EntryLines from "./components/EntryLines";

import MainHeader from "./components/MainHeader";
import NewEntryForm from "./components/NewEntryForm";
const initialValue = [
  { id: "e1", description: "work income", value: "$1000", isExpense: false },
  { id: "e2", description: "water bills", value: "$105", isExpense: true },
  { id: "e3", description: "rents", value: "$100", isExpense: true },
  { id: "e4", description: "power bills", value: "$20", isExpense: true },
];
function App() {
  const [entries, setEntries] = useState(initialValue);
  const deleteEntries = (id) => {
    const updatedEntries = entries.filter((entry) => entry.id !== id);
    setEntries(updatedEntries);
  };

  const addEntries = (data) => {
    setEntries((prevState) => [...prevState, data]);
  };
  return (
    <Container>
      <MainHeader title="Budget" />
      <DisplayBalance title="Your Balance:" value="2,550.53" size="small" />
      <DisplayBalances />
      <MainHeader title="History" type="h3" />
      <ul>
        <EntryLines entries={entries} onDeleteEntry={deleteEntries} />
      </ul>
      <MainHeader title="Add new transaction" type="h3" />
      <NewEntryForm onAddEntry={addEntries} />
    </Container>
  );
}
export default App;
