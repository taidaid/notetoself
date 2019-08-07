import React from "react";

const Note = ({ note }) => {
  return (
    <div className="row justify-content-center m-2">
      <div className="border rounded col-8">
        <p className="text-left">{note.text}</p>{" "}
      </div>
    </div>
  );
};

export default Note;
