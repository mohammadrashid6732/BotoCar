import styles from "./Layout.module.css";

function Layout({ children }) {
  return (
    <div>
      <header className={styles.header}>
        <h2>BOTOCAR</h2>
        <p>Choose an Buy your car</p>
      </header>
      <div className={styles.container}>{children}</div>
      <footer className={styles.footer}>
        <a href="#">Mohammad Rashid </a>
        Next.js course | BOTOCAR Project &copy;
      </footer>
    </div>
  );
}

export default Layout;
