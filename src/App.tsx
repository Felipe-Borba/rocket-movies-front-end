import styled from "styled-components";
import { Button } from "./components/Button";
import { Header } from "./components/Header";

function App() {
  return (
    <Container>
      <Header/>
      <h1>teste</h1>
      <Button onClick={() => console.log("oi")}>botao</Button>
      <Button loading={true}>dasfsadfasd</Button>
    </Container>
  );
}

export default App;

const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas:
  "header"
  "content";
  
`