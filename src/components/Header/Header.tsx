import { useTheme } from "../../hooks/useTheme";
import { MoonIcon, SunIcon } from "../Icons/Icons";
import { site } from "../../data/site";
import styles from "./Header.module.css";

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <a href="#top" className={styles.brand}>
          <span className={styles.mark}>JE</span>
          <span className={styles.brandName}>{site.name}</span>
        </a>

        <nav className={styles.nav} aria-label="Sections">
          <a href="#work">Work</a>
          <a href="#toolbox">Toolbox</a>
          <a href="#about">About</a>
        </nav>

        <button
          type="button"
          className={styles.toggle}
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
          title={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
        >
          {theme === "dark" ? <SunIcon /> : <MoonIcon />}
        </button>
      </div>
    </header>
  );
};

export default Header;
