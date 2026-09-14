import { site } from "../../data/site";
import styles from "./About.module.css";

const About = () => (
  <div className={styles.about}>
    <p>
      I ended up in front-end work because I get to exercise both my logical and
      creative sides day to day. A great interface has to function well, look
      good, and be intuitive to use. I want to bridge the gap between the user
      and the machine so they can easily complete their tasks with minimal
      frustration. Real frustration that all of us experience frequently.
    </p>
    <p>
      In practice that means I'm the person asking what happens when the request
      fails, when the list is empty, when there are four thousand rows, or when
      someone is navigating with a keyboard.
    </p>
    <p>
      I tend to gravitate towards building things I find interesting or useful.
      I've been growing a garden, and I wanted to know which plants actually
      support the wildlife nearby. Native Patch started as nothing more than an
      excuse to learn the Next.js App Router properly and turned into a tool I
      actually use. That's roughly how most of my side projects go.
    </p>
    <p className={styles.cta}>
      If you're hiring for front-end work, or you just want to talk about React,
      accessibility, or native plants, I'd genuinely like to hear from you:{" "}
      <a href={`mailto:${site.email}`}>{site.email}</a>.
    </p>
  </div>
);

export default About;
