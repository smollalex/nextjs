import { useState, useEffect } from "react";
import Head from "next/head";
import MainLayout from "../components/layouts/MainLayout";
import Link from "next/link";

const Posts = ({ posts }) => {
  //const [posts, setPosts] = useState([]);

  // не для сервер сайд рендеринга
  /*
  useEffect(() => {
    const load = async () => {
      const response = await fetch("http://localhost:4200/posts");
      const json = await response.json();
      setPosts(json);
    };

    load();
  }, []);
  */

  return (
    <MainLayout head_title="Posts">
      <h1>Posts</h1>
      {posts.map((post) => (
        <Link href={`/post/[id]`} as={`/post/${post.id}`} key={post.id}>
          <a>{post.title}</a>
        </Link>
      ))}
    </MainLayout>
  );
};

Posts.getInitialProps = async (ctx) => {
  console.log(ctx);
  const res = await fetch("http://localhost:4200/posts");
  const posts = await res.json();
  return { posts };
};

export default Posts;
