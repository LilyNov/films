import { Container } from "@material-ui/core";
import NavBar from "./NavBar/NavBar";
import HomePage from "./HomePage/HomePage";

export default function App() {
  return (
    <Container>
      <NavBar />
      <HomePage />
    </Container>
  );
}
