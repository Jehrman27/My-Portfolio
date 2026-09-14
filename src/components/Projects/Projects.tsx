import { projects } from "../../data/site";
import ProjectCard from "../ProjectCard/ProjectCard";
import styles from "./Projects.module.css";

export const Projects = () => (
  <div className={styles.list}>
    {projects.map((project) => (
      <ProjectCard key={project.name} project={project} />
    ))}
  </div>
);

export default Projects;
