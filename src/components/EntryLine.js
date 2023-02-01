import React, { useState } from "react";
import { Grid, Icon, Segment } from "semantic-ui-react";
import ModalEdit from "./ModalEdit";

function EntryLine(props) {
  const [IsOpen, setIsOpen] = useState(false);
  const deleteEntryHandler = () => {
    props.onDeleteEntry(props.entry.id);
  };
  const openModalHandler = () => {
    setIsOpen(true);
  };
  return (
    <>
      <Segment color={props.entry.isExpense ? "red" : "green"}>
        <Grid columns={3} textAlign="right">
          <Grid.Row>
            <Grid.Column width={10} textAlign="left">
              {props.entry.description}
            </Grid.Column>
            <Grid.Column width={3} textAlign="right">
              {props.entry.value}
            </Grid.Column>
            <Grid.Column width={3}>
              <Icon name="edit" bordered onClick={openModalHandler} />
              <Icon name="trash" onClick={deleteEntryHandler} bordered />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <ModalEdit isOpen={IsOpen} setIsOpen={setIsOpen}></ModalEdit>
    </>
  );
}

export default EntryLine;
