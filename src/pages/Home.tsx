import PageTransition from "../components/PageTransition";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <PageTransition>
      <Hero />
      <section className="h-screen flex items-center justify-center bg-gray-100">
        <h2 className="text-3xl font-bold">Welcome to the Home Page</h2>
      </section>
    </PageTransition>
  );
}
