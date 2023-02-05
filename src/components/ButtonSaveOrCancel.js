import React from "react";
import { Button } from "semantic-ui-react";
import { v4 } from "uuid";
function ButtonSaveOrCancel(props) {
  const addEntryHandler = () => {
    const data = {
      id: v4(),
      description: props.description,
      value: props.value,
      isExpense: props.IsExpense,
    };
    console.log(data);
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
