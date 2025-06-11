import styles from "../components/Layout.module.css";

function Layout({ children }) {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h2>BOTOCAR</h2>
        <p>Choose an Buy your car</p>
      </header>
      <div>{children}</div>
      <footer className={styles.footer}>
        <a href="#">Mohammad Rashid </a>
        Next.js course | BOTOCAR Project &copy;
      </footer>
    </div>
  );
}

export default Layout;
