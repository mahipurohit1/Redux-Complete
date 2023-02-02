import React from "react";
import { Grid, Icon, Segment } from "semantic-ui-react";

function EntryLine(props) {
  const deleteEntryHandler = () => {
    props.onDeleteEntry(props.entry.id);
  };
  const openModalHandler = () => {
    props.editEntry(props.entry.id);
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
    </>
  );
}

export default EntryLine;
