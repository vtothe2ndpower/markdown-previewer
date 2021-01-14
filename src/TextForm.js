import React, { Component } from 'react';
import marked from 'marked';

class TextForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editor: "# Welcome to my React Markdown Previewer!\n\n## This is a sub-heading...\n### And here's some other cool stuff:\n\nHeres some code, `<div></div>`, between 2 backticks.\n\n```\n// this is multi-line code:\n\nfunction anotherExample(firstLine, lastLine) {\n  if (firstLine == '```' && lastLine == '```') {\n    return multiLineCode;\n  }\n}\n```\n\nYou can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~.\n\nThere's also [links](https://www..."
    };
    this.createMarkup = this.createMarkup.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  createMarkup() {
    return {
      __html: marked(this.state.editor)
    };
  }

  componentDidMount() {
    this.createMarkup();
    // document.getElementById('preview').innerHTML = marked(this.state.editor)
  }

  handleChange(e) {
    this.setState({
    [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      <div>
        <form>
          <label htmlFor="editor"><h3>Write Content Here: </h3></label>
          <textarea
            id="editor"
            name="editor"
            cols="80"
            rows="30"
            value={this.state.editor}
            onChange={this.handleChange}
          >
          </textarea>
        </form>

        <h3>Output:</h3>
        <div 
          id="preview" 
          dangerouslySetInnerHTML={this.createMarkup() }
        >
        </div>
      </div>
    )
  }
}

export default TextForm;