import styles from "./Pill.module.css";

interface PillProps {
  children: React.ReactNode;
  subtle?: boolean;
}

export const Pill = ({ children, subtle = false }: PillProps) => (
  <span className={subtle ? `${styles.pill} ${styles.subtle}` : styles.pill}>
    {children}
  </span>
);

export default Pill;
