import React from 'react';
import Range from "./Range";
import RangeSlider from "./Range"
import {Container} from "./App.components"

function App() {
  return (
    <Container className="App">
      <h1 style={{fontSize: "5vh"}}>Simple SPA</h1>
          <ul className="header" >
            <li><a href="/" style={{fontSize:"3vh"}}>Home</a></li>
            <li><a href="/stuff" style={{fontSize:"3vh"}}>Stuff</a></li>
            <li><a href="/contact" style={{fontSize:"3vh"}}>Contact</a></li>
          </ul>
          <div className="content">
          </div>
          <Range name="Openness" firstLabel="consistent and cautious" secondLabel="inventive and curious"/>
    <Range name="Conscientiousness" firstLabel="easy-going and careless" secondLabel="efficient and organized"/>
    <Range name="Extraversion" firstLabel="solitary and reserved" secondLabel="outgoing and energetic"/>
    <Range name="Agreeableness" firstLabel="challenging and detached" secondLabel="friendly and compassionate"/>
    <Range name="Neuroticism" firstLabel="secure and confident" secondLabel="sensitive and nervous"/>
    </Container>
  );
}

export default App;
