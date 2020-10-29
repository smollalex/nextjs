import "../styles/index.css";
import { useState, useEffect } from "react";
import NextNprogress from "nextjs-progressbar";

import auth from "../services/authService";

const MyApp = ({ Component, pageProps }) => {
  const [user, setUser] = useState();

  //console.log("pageProps from _app.js = ", pageProps);

  useEffect(() => {
    const user = auth.getCurrentUser();
    setUser(user);
    //console.log("user from App.js = ", user);
  }, []);

  return (
    <>
      <NextNprogress
        color="#29D"
        /* startPosition="0.3"
        stopDelayMs="200" */
        height="3"
      />
      <Component {...pageProps} />
    </>
  );
};
export default MyApp;
