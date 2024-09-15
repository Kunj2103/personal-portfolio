import About from "./components/About";
import FAQ from "./components/FAQ";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";

export default function Home() {
  return (
    <main className="min-h-screen p-12">
      <About />
      <Projects />
      <TechStack />
      <FAQ />
    </main>
  );
}
