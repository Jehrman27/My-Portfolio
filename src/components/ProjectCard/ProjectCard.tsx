import type { Project } from "../../data/site";
import Pill from "../Common/Pill/Pill";
import { ArrowIcon } from "../Icons/Icons";
import styles from "./ProjectCard.module.css";

const ProjectCard = ({ project }: { project: Project }) => (
  <article className={styles.card}>
    <header className={styles.head}>
      <h3 className={styles.name}>
        {project.name}
        {project.org && <span className={styles.org}>{project.org}</span>}
      </h3>
      {project.status && <Pill subtle>{project.status}</Pill>}
    </header>

    <p className={styles.role}>{project.role}</p>
    <p className={styles.summary}>{project.summary}</p>

    <ul className={styles.highlights}>
      {project.highlights.map((highlight) => (
        <li key={highlight}>{highlight}</li>
      ))}
    </ul>

    <ul className={styles.stack}>
      {project.stack.map((tech) => (
        <li key={tech}>
          <Pill>{tech}</Pill>
        </li>
      ))}
    </ul>

    <div className={styles.links}>
      {project.links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noreferrer"
          className={link.primary ? styles.linkPrimary : styles.link}
        >
          {link.label}
          <ArrowIcon size={14} />
        </a>
      ))}
    </div>

    {project.note && <p className={styles.note}>{project.note}</p>}
  </article>
);

export default ProjectCard;
