import React from "react";
import { mount } from "enzyme";
import Note from "./Note";

const props = { note: { text: "test note" } };

console.log({ ...props });

describe("Note", () => {
  let note = mount(<Note {...props} />);

  it("renders the note text", () => {
    console.log(note.debug());
    expect(note.find("p").text()).toEqual(props.note.text);
  });
});
