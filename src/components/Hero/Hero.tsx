import { site } from "../../data/site";
import { GitHubIcon, LinkedInIcon, MailIcon } from "../Icons/Icons";
import styles from "./Hero.module.css";

const Hero = () => (
  <section className={styles.hero} id="top">
    <div className={styles.copy}>
      <p className={styles.eyebrow}>
        <span className={styles.rule} aria-hidden="true" />
        {site.role}
      </p>

      <h1 className={styles.name}>{site.name}</h1>

      <p className={styles.lede}>
        I build the part of the product people actually touch. Most recently
        that's <strong>Peregrine</strong>, a threat-intelligence platform where
        the entire interface is mine — I took it from an empty React project to
        the tool analysts work in every day. It runs on a Python backend my
        partner built, and I worked in there too when a feature needed it.
      </p>

      <p className={styles.body}>
        The honest version of "I love problem solving": I like shipping quickly
        without leaving a mess behind. Features that land fast and still hold up
        six months later. I'm comfortable anywhere in the stack, I genuinely
        enjoy taking rough code and making it boring, and I'll push back for the
        user in a planning meeting when it would be easier to stay quiet.
      </p>

      {site.openToWork && (
        <p className={styles.status}>
          <span className={styles.dot} aria-hidden="true" />
          Open to front-end roles
        </p>
      )}

      <div className={styles.actions}>
        <a className={styles.primary} href={`mailto:${site.email}`}>
          <MailIcon size={18} />
          Get in touch
        </a>
        <a
          className={styles.secondary}
          href={site.github}
          target="_blank"
          rel="noreferrer"
        >
          <GitHubIcon size={18} />
          GitHub
        </a>
        <a
          className={styles.secondary}
          href={site.linkedin}
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInIcon size={18} />
          LinkedIn
        </a>
      </div>
    </div>

    <div className={styles.portrait}>
      <picture>
        <source srcSet="/images/jonathan.webp" type="image/webp" />
        <img
          src="/images/jonathan.jpg"
          alt="Jonathan Ehrmantraut, smiling in front of a fountain in the rain"
          width={720}
          height={720}
          fetchPriority="high"
        />
      </picture>
    </div>
  </section>
);

export default Hero;
