import React from "react";
import { Button } from "semantic-ui-react";
function ButtonSaveOrCancel(props) {
  const addEntryHandler = () => {
    const data = {
      id: (Math.random() * 1).toString(),
      description: props.description,
      value: props.value,
      isExpense: props.IsExpense,
    };
    props.onAddEntry(data);
    props.onResetValue();
  };
  return (
    <Button.Group style={{ marginTop: 20 }}>
      <Button>Cancel</Button>
      <Button.Or />
      <Button primary onClick={addEntryHandler}>
        Ok
      </Button>
    </Button.Group>
  );
}

export default ButtonSaveOrCancel;
