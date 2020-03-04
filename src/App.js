import React, {useState} from 'react';
import Range from "./components/Range";
import Lottie from "react-lottie";
import rabbitData from "./Animations/bunny.json"
import {Container, Banner, Header, Button, LottieDiv} from "./App.components"


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
  return (
    <Container className="App">
      <Banner>
        <LottieDiv>
          <Lottie
            options={bunnyLottie}
            height={"100px"}
            width={"100px"}
            isPaused={false}
            />
            </LottieDiv>
        <Header>
          <text>h</text>
          <text style={{color:"#ffdab9"}}>A</text>
          <text>ire</text>
          </Header>
      </Banner>
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
    <Button
    style={{background: pressed ? "#c3acce" : "#ffdab9"}}
    onMouseEnter={() => setPressed(!pressed)}
    onMouseLeave={() => setPressed(!pressed)}
    >
      <text>search</text>
      </Button>
    </Container>
  );
}

export default App;
