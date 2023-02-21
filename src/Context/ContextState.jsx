import React, { useState } from "react";
import DataContext from "./DataContext";

const ContextState = ({ children }) => {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");

  return (
    <DataContext.Provider value={{ html, setHtml, css, setCss, js, setJs }}>
      {children}
    </DataContext.Provider>
  );
};

export default ContextState;
