import React, { useState } from "react";

import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/css/css";
import "codemirror/mode/javascript/javascript";

import { Controlled as ControlledEditor } from "react-codemirror2";

const Editor = ({ heading, language, value, onChange, icon, color }) => {

  const [open, setOpen] = useState(true);

  const handleChange = (editor, data, value) => {
    onChange(value);
  };

  return (
    <>
      <div className="editor" style={open ? null : { flexGrow: 0 }}>
        <header className="top-editor">
          <div className="logo-language">
            <img src={icon} alt="icon" />
            <h3>{heading}</h3>
          </div>
          <button onClick={() => setOpen((prevState) => !prevState)}>
            <i class="fa-regular fa-circle-xmark"></i>
          </button>
        </header>
        <ControlledEditor
          onBeforeChange={handleChange}
          value={value}
          options={{
            lineWrapping: true,
            lint: true,
            mode: language,
            lineNumbers: true,
            theme: "material",
          }}
        />
      </div>
    </>
  );
};

export default Editor;
