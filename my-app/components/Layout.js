function Layout({ children }) {
  return (
    <>
      <header className="">
        <h2>BOTOCAR</h2>
        <p>Choose an Buy your car</p>
      </header>
      <div>{children}</div>
      <footer className="">
        <a href="#">Mohammad Rashid</a>
        Next.js course | BOTOCAR Project &copy;
      </footer>
    </>
  );
}

export default Layout;
