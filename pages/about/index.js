import Router from "next/router";
import MainLayout from "../../components/layouts/MainLayout";

export default function About() {
  const linkHandler = (url) => {
    Router.push(url);
  };
  return (

  <MainLayout head_title="About">
    <h1>About</h1>
    <button onClick={() => linkHandler("/")}>Go home</button>
    <button onClick={() => linkHandler("/post/14")}>Go post</button>
  </MainLayout>
  )
}
