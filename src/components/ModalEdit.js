import React from "react";
import { Modal, Button } from "semantic-ui-react";
import EntryForm from "./EntryForm";

function ModalEdit(props) {
  return (
    <Modal open={props.isOpen}>
      <Modal.Header> Edit Entry </Modal.Header>
      <Modal.Content>
        <EntryForm
          onAddEntry={props.addEntries}
          description={props.description}
          IsExpense={props.IsExpense}
          setIsExpense={props.setIsExpense}
          setDescription={props.setDescription}
          value={props.value}
          setValue={props.setValue}
        ></EntryForm>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => props.setIsOpen(false)}>close</Button>
        <Button onClick={() => props.setIsOpen(false)} primary>
          Save
        </Button>
      </Modal.Actions>
    </Modal>
  );
}

export default ModalEdit;
