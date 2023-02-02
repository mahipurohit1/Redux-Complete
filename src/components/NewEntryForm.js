import React from "react";
import { Form } from "semantic-ui-react";
import ButtonSaveOrCancel from "./ButtonSaveOrCancel";
import EntryForm from "./EntryForm";

function NewEntryForm(props) {
  return (
    <Form unstackable>
      <EntryForm
        description={props.description}
        IsExpense={props.IsExpense}
        setIsExpense={props.setIsExpense}
        setDescription={props.setDescription}
        value={props.value}
        setValue={props.setValue}
      ></EntryForm>
      <ButtonSaveOrCancel
        description={props.description}
        value={props.value}
        onAddEntry={props.onAddEntry}
        onResetValue={props.resetValue}
        IsExpense={props.IsExpense}
      />
    </Form>
  );
}

export default NewEntryForm;
