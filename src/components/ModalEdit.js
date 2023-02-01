import React from "react";
import { Modal, Button } from "semantic-ui-react";
import EntryForm from "./EntryForm";

function ModalEdit(props) {
  return (
    <Modal open={props.isOpen}>
      <Modal.Header> Edit Entry </Modal.Header>
      <Modal.Content>
        <EntryForm></EntryForm>{" "}
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => props.setIsOpen(false)}>close</Button>
      </Modal.Actions>
    </Modal>
  );
}

export default ModalEdit;
