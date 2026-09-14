import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import Toolbox from "./components/Toolbox/Toolbox";
import styles from "./App.module.css";

interface SectionProps {
  id: string;
  title: string;
  kicker?: string;
  children: React.ReactNode;
}

const Section = ({ id, title, kicker, children }: SectionProps) => (
  <section id={id} className={styles.section}>
    <div className={styles.sectionHead}>
      <h2>{title}</h2>
      {kicker && <p>{kicker}</p>}
    </div>
    {children}
  </section>
);

const App = () => (
  <>
    <a href="#main" className={styles.skipLink}>
      Skip to content
    </a>

    <Header />

    <main id="main" className={styles.page}>
      <Hero />

      <Section
        id="work"
        title="Selected work"
        kicker="Two things worth your time: one shipped at a company, one built on my own."
      >
        <Projects />
      </Section>

      <Section id="toolbox" title="Toolbox">
        <Toolbox />
      </Section>

      <Section id="about" title="About">
        <About />
      </Section>

      <Footer />
    </main>
  </>
);

export default App;
