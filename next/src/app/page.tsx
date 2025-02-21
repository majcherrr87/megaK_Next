import { Container } from "./components/Container";
import { Counter } from "./components/Counter";

export default function Home() {
  return (
    <Container>
      <Counter />
      <h1>Hello World!</h1>
    </Container>
  );
}
