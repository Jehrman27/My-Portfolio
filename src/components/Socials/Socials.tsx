import { site } from "../../data/site";
import { GitHubIcon, LinkedInIcon, MailIcon } from "../Icons/Icons";
import styles from "./Socials.module.css";

const links = [
  { href: site.github, label: "GitHub", Icon: GitHubIcon, external: true },
  { href: site.linkedin, label: "LinkedIn", Icon: LinkedInIcon, external: true },
  { href: `mailto:${site.email}`, label: "Email", Icon: MailIcon, external: false },
];

const Socials = () => (
  <ul className={styles.socials}>
    {links.map(({ href, label, Icon, external }) => (
      <li key={label}>
        <a
          href={href}
          aria-label={label}
          title={label}
          {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
        >
          <Icon size={18} />
        </a>
      </li>
    ))}
  </ul>
);

export default Socials;
