// Import React (Mandatory Step).
import React from "react";
// Import Output Screen Row.
import OutputScreenRow from "./OutputScreenRow.js";

// Functional Component.
// Use to hold two Screen Rows.
const OutputScreen = (props) => {
  return (
    <div className="screen">
      <OutputScreenRow value={props.value.question} />
      <OutputScreenRow value={props.value.answer} />
    </div>
  );
};

// Export Output Screen.
export default OutputScreen;
