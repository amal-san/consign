import logo from './logo.svg';
import './App.css';

import { Button } from './components/buttons/PrimaryButton'
import { Container } from './components/layout/Container'

function App() {
  return (
    <Container primary width="100%" height="100vh">
      <Container primary width="20%" height="50%" bg="blue">
        <Button shadow="3px 2px 4px 0px #03cdfc" bg="#7ecbf9" primary > Hello </Button>
      </Container>
      <Container primary width="20%" height="50%" bg="gold">
        <Button shadow="3px 2px 4px 0px #03cdfc" bg="#7ecbf9" primary > Hello </Button>
      </Container>
    </Container>
  );
}

export default App;
