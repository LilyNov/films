import { Container } from "@material-ui/core";
import { useSelector } from "react-redux";
import { isLoading } from "./redux/topMovies/topMovies-selectors";
import Loader from "./components/Loader/Loader";
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
