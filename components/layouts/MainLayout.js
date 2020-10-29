import Head from "next/head";
import NavBar from "./Navbar";

const MainLayout = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <main>
        <NavBar/>
        {children}
      </main>
    </>
  );
};

export default MainLayout;
