import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
<<<<<<< HEAD
import "./Notes.css";

function Notes(props) {
  const { title, content, deleteFunc, editFunc, id } = props;

  for (var i = 0; i < content.length; i++) {
    console.log(content.charAt(i));
  }
=======

function Notes(props) {
  const { title, content, deleteFunc, editFunc, id } = props;
>>>>>>> 82a6c9a7b8f3fb965256657c2217fd97223377c8

  return (
    <div className="noteBox">
      <h3 className="noteTitle">{title}</h3>
      <p className="noteContent">{content}</p>
      <DeleteIcon
        className="buttonWrap-delete"
        onClick={() => deleteFunc(id)}
      />
      <EditIcon className="buttonWrap-edit" onClick={() => editFunc(id)} />
    </div>
  );
}

export default Notes;
