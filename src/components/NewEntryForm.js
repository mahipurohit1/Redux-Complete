import React, { useState } from "react";
import { Form } from "semantic-ui-react";
import ButtonSaveOrCancel from "./ButtonSaveOrCancel";
import EntryForm from "./EntryForm";

function NewEntryForm(props) {
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [IsExpense, setIsExpense] = useState(true);

  const resetValue = () => {
    setDescription("");
    setValue("");
  };
  return (
    <Form unstackable>
      <EntryForm
        description={description}
        IsExpense={IsExpense}
        setIsExpense={setIsExpense}
        setDescription={setDescription}
        value={value}
        setValue={setValue}
      ></EntryForm>
      <ButtonSaveOrCancel
        description={description}
        value={value}
        onAddEntry={props.onAddEntry}
        onResetValue={resetValue}
        IsExpense={IsExpense}
      />
    </Form>
  );
}

export default NewEntryForm;
