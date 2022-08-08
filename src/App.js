import "./App.css";
import Header from "./Headers/Header";
import MyContext from "./store/ChangeColor-context";
import { useState } from "react";
import styled from "styled-components";

function App() {
  const [bgColor, setBgColor] = useState(false);
  return (
    <>
      <MyContext.Provider value={{ bgColor, setBgColor }}>
        <Div bgColor={bgColor}>
          <Header />
        </Div>
      </MyContext.Provider>
    </>
  );
}

export default App;

const Div = styled.div`
  background-color: ${(props) => (props.bgColor ? "gray" : "white")};
  height: 100vh;
  width: 100%;
`;
