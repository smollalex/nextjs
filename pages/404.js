import MainLayout from "../components/layouts/MainLayout";
import Link from "next/link";

const ErrorPage = () => {
  return (
    <MainLayout head_title="404 error">
      <h1>404 Error</h1>
      <Link href="/">home</Link>
    </MainLayout>
  );
};
export default ErrorPage;
