import { Home } from "@/components/Home";
import { Container } from "@mantine/core";

export default function HomePage() {
  return (
    <Container className="h-full pt-8" size="md">
      <Home />
    </Container>
  );
}
