import React, { Component } from "react";
import Note from "./Note";
import { bake_cookie, read_cookie, delete_cookie } from "sfcookies";
import { Form, FormControl, Button } from "react-bootstrap";

const cookie_key = "NOTES";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      notes: [],
    };
  }

  componentDidMount() {
    this.setState({ notes: read_cookie(cookie_key) });
  }

  clearNotes = () => {
    delete_cookie(cookie_key);
    this.setState({ notes: [] });
  };

  submit = e => {
    e.preventDefault();
    const newNotes = this.state.notes;
    const newText = this.state.text;

    newNotes.push({ text: newText });
    this.setState({ notes: newNotes });
    this.setState({ text: "" });
    bake_cookie(cookie_key, newNotes);
  };
  render() {
    return (
      <div className="text-center container-fluid">
        <h2>Note to Self</h2>

        <Form
          className="justify-content-center row"
          inline
          onSubmit={e => this.submit(e)}
        >
          <FormControl
            className="col-lg-11 col-sm-12 col-xs-12"
            onChange={e => this.setState({ text: e.target.value })}
            value={this.state.text}
            autoFocus
          />

          <Button
            className="col-lg-1 col-sm-2 col-xs-2"
            onClick={e => this.submit(e)}
          >
            Submit
          </Button>
        </Form>
        {this.state.notes.map((note, index) => {
          return <Note key={index} note={note} />;
        })}
        <div className="row justify-content-center">
          <Button
            className="col-2 btn-danger"
            onClick={() => this.clearNotes()}
          >
            Clear Notes
          </Button>
        </div>
      </div>
    );
  }
}

export default App;
