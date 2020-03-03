import React from "react";
import ReactDOM from "react-dom";
import Main from "./Main";
import Range from "./Range";
import RangeSlider from "./Range";

ReactDOM.render(
  <div>
    <Main/>
    <Range name="Openness" firstLabel="inventive and curious" secondLabel="consistent and cautious"/>
    <Range name="Conscientiousness" firstLabel="efficient and organized" secondLabel="easy-going and careless"/>
    <Range name="Extraversion" firstLabel="solitary and reserved" secondLabel="outgoing and energetic"/>
    <Range name="Agreeableness" firstLabel="challenging and detached" secondLabel="friendly and compassionate"/>
    <Range name="Neuroticism" firstLabel="secure and confident" secondLabel="sensitive and nervous"/>
  </div>,
  document.getElementById("root")
);