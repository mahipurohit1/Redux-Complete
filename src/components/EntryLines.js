import React from "react";
import EntryLine from "./EntryLine";

function EntryLines(props) {
  return (
    <>
      {props.entries.map((entry) => {
        return (
          <li key={entry.id}>
            <EntryLine entry={entry} onDeleteEntry={props.onDeleteEntry} />
          </li>
        );
      })}
    </>
  );
}

export default EntryLines;
