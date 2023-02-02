import { useEffect, useState } from "react";
import { Container } from "semantic-ui-react";
import "./App.css";
import DisplayBalance from "./components/DisplayBalance";
import DisplayBalances from "./components/DisplayBalances";
import EntryLines from "./components/EntryLines";
import ModalEdit from "./components/ModalEdit";
import MainHeader from "./components/MainHeader";
import NewEntryForm from "./components/NewEntryForm";
const initialValue = [
  { id: "e1", description: "work income", value: "1000", isExpense: false },
  { id: "e2", description: "water bills", value: "105", isExpense: true },
  { id: "e3", description: "rents", value: "100", isExpense: true },
  { id: "e4", description: "power bills", value: "20", isExpense: true },
];
function App() {
  const [entries, setEntries] = useState(initialValue);
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [IsExpense, setIsExpense] = useState(true);
  const [IsOpen, setIsOpen] = useState(false);
  const [entryId, setEntryId] = useState("");
  const [income, setIncome] = useState(0);
  const [expenses, setExpenses] = useState(0);
  const deleteEntries = (id) => {
    const updatedEntries = entries.filter((entry) => entry.id !== id);
    setEntries(updatedEntries);
  };
  const resetValue = () => {
    console.log("clicked");
    setDescription("");
    setValue("");
    setIsExpense(true);
  };
  useEffect(() => {
    if (!IsOpen && entryId) {
      const index = entries.findIndex((item) => item.id === entryId);
      const newEntry = [...entries];
      newEntry[index].description = description;
      newEntry[index].value = value;
      newEntry[index].isExpense = IsExpense;
      setEntries(newEntry);
      resetValue();
    }
  }, [IsOpen]);

  useEffect(() => {
    const incomeArray = entries.filter((entry) => entry.isExpense === false);
    const income = incomeArray.reduce(
      (accumulator, entry) => accumulator + +entry.value,
      0
    );
    setIncome(income);
  }, [entries]);
  useEffect(() => {
    const expenseArray = entries.filter((entry) => entry.isExpense === true);
    const expenses = expenseArray.reduce(
      (accumulator, entry) => accumulator + +entry.value,
      0
    );
    setExpenses(expenses);
  }, [entries]);

  function addEntries(data) {
    setEntries((prevState) => [...prevState, data]);
  }

  const editEntry = (id) => {
    const index = entries.findIndex((item) => item.id === id);
    const entry = entries[index];
    setDescription(entry.description);
    setIsExpense(entry.isExpense);
    setValue(entry.value);
    setEntryId(id);
    setIsOpen(true);
  };
  return (
    <Container>
      <MainHeader title="Budget" />
      <DisplayBalance
        title="Your Balance:"
        value={income - expenses}
        size="small"
      />
      <DisplayBalances income={income} expenses={expenses} />
      <MainHeader title="History" type="h3" />
      <ul>
        <EntryLines
          entries={entries}
          onDeleteEntry={deleteEntries}
          editEntry={editEntry}
        />
      </ul>
      <MainHeader title="Add new transaction" type="h3" />
      <NewEntryForm
        onAddEntry={addEntries}
        description={description}
        IsExpense={IsExpense}
        setIsExpense={setIsExpense}
        setDescription={setDescription}
        value={value}
        setValue={setValue}
        resetValue={resetValue}
      />
      <ModalEdit
        isOpen={IsOpen}
        setIsOpen={setIsOpen}
        onAddEntry={addEntries}
        description={description}
        IsExpense={IsExpense}
        setIsExpense={setIsExpense}
        setDescription={setDescription}
        value={value}
        setValue={setValue}
      ></ModalEdit>
    </Container>
  );
}
export default App;
