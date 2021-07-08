import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";

function Notes(props) {
  const { title, content, deleteFunc, id } = props;

  return (
    <div className="noteBox">
      <h3 className="noteTitle">{title}</h3>
      <p className="noteContent">{content}</p>
      <DeleteIcon
        className="buttonWrap-delete"
        onClick={() => deleteFunc(id)}
      />
    </div>
  );
}

export default Notes;
