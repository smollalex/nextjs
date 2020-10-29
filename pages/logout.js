import auth from "../services/authService";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Logout = () => {
  const router = useRouter();

  useEffect(() => {
    auth.logout();
    router.push("/");
  }, []);

  return <></>;
};
export default Logout;
