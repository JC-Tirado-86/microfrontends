import styled from "styled-components";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

const AppMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;
`;

const Button = styled.button`
  width: 80px;
`;

function App() {
  return (
    <AppContainer>
      <h1>React app</h1>
      <AppMenu>
        <Button>Snake</Button>
        <Button>Tictactoe</Button>
      </AppMenu>
    </AppContainer>
  );
}

export default App;
