import { Container } from "@material-ui/core";
import NavBar from "./components/NavBar/NavBar";
import HomePage from "./components/HomePage/HomePage";

export default function App() {
  return (
    <Container>
      <NavBar />
      <HomePage />
    </Container>
  );
}
