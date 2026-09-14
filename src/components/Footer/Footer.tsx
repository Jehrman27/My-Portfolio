import { site } from "../../data/site";
import Socials from "../Socials/Socials";
import styles from "./Footer.module.css";

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.meta}>
      <p>
        Designed and built by {site.name}. React, TypeScript and Vite, deployed
        from GitHub Actions.
      </p>
      <p>
        <a href={site.repo} target="_blank" rel="noreferrer">
          Source for this site
        </a>
      </p>
    </div>
    <Socials />
  </footer>
);

export default Footer;
