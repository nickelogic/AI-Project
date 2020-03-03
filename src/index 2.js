import React from "react";
import ReactDOM from "react-dom";
import Main from "./Main";
import Range from "./Range";
import RangeSlider from "./Range";

ReactDOM.render(
  <div>
    <Main/>
    <Range name="Openness" />
    <Range name="Conscientiousness" />
    <Range name="Extraversion" />
    <Range name="Agreeableness" />
    <Range name="Neuroticism" />
  </div>,
  document.getElementById("root")
);