import { Button } from "./components/Button";

function App() {
  return (
    <div>
      <h1>teste</h1>
      <Button onClick={() => console.log("oi")}>botao</Button>
      <Button loading={true}>dasfsadfasd</Button>
    </div>
  );
}

export default App;
