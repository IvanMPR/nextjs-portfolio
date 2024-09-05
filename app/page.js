import Hero from "./_components/home/Hero";
import Container from "./_components/utils/Container";

export default function Home() {
  return (
    <div className=' flex flex-1 '>
      <Container>
        <Hero />
      </Container>
    </div>
  );
}
