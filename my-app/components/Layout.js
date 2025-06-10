function Layout({ children }) {
  return (
    <div  >
      <header>
        <h2>BOTOCAR</h2>
        <p>Choose an Buy your car</p>
      </header>
      <div>{children}</div>
      <footer>
        <a href="#">Mohammad Rashid</a>
        Next.js course | BOTOCAR Project &copy;
      </footer>
    </div>
  );
}

export default Layout;
