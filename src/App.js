import React, {useState} from 'react';
import Range from "./components/Range";
import Lottie from "react-lottie";
import rabbitData from "./Animations/bunny.json"
import {Container, Banner, Header, Button, LottieDiv} from "./App.components"
import Results from "./components/Results";

const bunnyLottie = {
  loop: true,
  autoplay: true,
  animationData: rabbitData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};

function App() {
  const [pressed, setPressed] = useState(0);
  const [results, setResults] = useState([]);
  return (
    <div>
    <Container className="App">
      <Banner style={{marginBottom:"50px"}}>
        <LottieDiv>
          <Lottie
            options={bunnyLottie}
            height={"195px"}
            width={"200px"}
            isPaused={false}
            />
            </LottieDiv>
        <Header style={{paddingLeft:"150px"}}>
          <text>h</text>
          <text style={{color:"#ffdab9"}}>A</text>
          <text>ire</text>
          </Header>
      </Banner>
          <Range name="Openness" firstLabel="consistent and cautious" secondLabel="inventive and curious" />
    <Range name="Conscientiousness" firstLabel="easy-going and careless" secondLabel="efficient and organized" onChange={() => setResults[this.Marks]}/>
    {console.log(results)}
    <Range name="Extraversion" firstLabel="solitary and reserved" secondLabel="outgoing and energetic"/>
    <Range name="Agreeableness" firstLabel="challenging and detached" secondLabel="friendly and compassionate"/>
    <Range name="Neuroticism" firstLabel="secure and confident" secondLabel="sensitive and nervous"/>
    <Button
    style={{background: pressed ? "#c3acce" : "#ffdab9"}}
    onClick={() => setPressed(pressed + 1)}
    >
      {pressed % 2 !== 1 ?
      <text>Search</text> : <text>Cancel</text>
}
      </Button>
    </Container>
    {pressed  === 1 ?
    <Container>
      {Results(1, "JJ","6278399202", "O: 80, C: 20, E: 40, A: 60, N: 80")}
      {Results(1, "Justin","987654321", "O: 75, C: 15, E: 40, A: 60, N: 80")}
      {Results(1, "John","123456789", "O: 80, C: 10, E: 20, A: 70, N: 89")}
      {Results(1, "Jeff","123456789", "O: 60, C: 10, E: 42, A: 50, N: 83")}
      </Container>
  : pressed === 3 ?
<Container>
  {Results(1, "Jacob","6278399202", "O: 20, C: 70, E: 00, A: 60, N: 10")}
      {Results(1, "Brian","987654321", "O: 15, C: 50, E: 04, A: 40, N: 10")}
      {Results(1, "Connor","123456789", "O: 30, C: 100, E: 02, A: 70, N: 19")}
      {Results(1, "Kurt","123456789", "O: 20, C: 90, E: 02, A: 50, N: 13")}
</Container> : <div/>}
    </div>
  );
}

export default App;
