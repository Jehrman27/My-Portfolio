import { toolbox } from "../../data/site";
import Pill from "../Common/Pill/Pill";
import styles from "./Toolbox.module.css";

const Toolbox = () => (
  <div className={styles.groups}>
    {toolbox.map(({ group, items }) => (
      <div key={group} className={styles.group}>
        <h3 className={styles.label}>{group}</h3>
        <ul className={styles.items}>
          {items.map((item) => (
            <li key={item}>
              <Pill>{item}</Pill>
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);

export default Toolbox;
