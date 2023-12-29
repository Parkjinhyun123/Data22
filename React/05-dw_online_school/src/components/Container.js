import styles from "./Container.module.css";
import classNames from "classnames";

function Container({ className, children }) {
  return (
    <div className={classNames(styles.container, className)}>{children}</div>
  );
}

export default Container;
