import React from "react";
import ReactDOM from "react-dom";
import Main from "./Main";
import Range from "./Range";

ReactDOM.render( //big five personality traits
  <div>
    <Range name="Openness" firstLabel="consistent and cautious" secondLabel="inventive and curious"/> 
    <Range name="Conscientiousness" firstLabel="easy-going and careless" secondLabel="efficient and organized"/>
    <Range name="Extraversion" firstLabel="solitary and reserved" secondLabel="outgoing and energetic"/>
    <Range name="Agreeableness" firstLabel="challenging and detached" secondLabel="friendly and compassionate"/>
    <Range name="Neuroticism" firstLabel="secure and confident" secondLabel="sensitive and nervous"/>
  </div>,
  document.getElementById("root")
);