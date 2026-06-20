import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Repertoire } from "@/components/Repertoire";
import { Media } from "@/components/Media";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Repertoire />
        <Media />
        <Contact />
      </main>
      <Footer />
    </>
  );
}