import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import MainLayout from "../../components/layouts/MainLayout";

const Product = () => {
  const router = useRouter();
  const query = router.query;
  console.log(query);
  //const [post, setPost] = useState(serverPost);

  /* useEffect(async () => {
    async function load() {
      const res = await fetch(`http://localhost:4200/posts/${router.query.id}`);
      const data = await res.json();
      setPost(data);
    }

    if (!serverPost) {
      load();
    }
  }, []);

  if (!post) {
    return <MainLayout>Loading...</MainLayout>;
  } */
  return (
    <>
      <MainLayout>
        {/* <h1>{post.title}</h1>
        <p>{post.text}</p> */}
      </MainLayout>
    </>
  );
};

/* Product.getInitialProps = async ({ query, req }) => {
  // req передаётся только при первоначальном рендеренге
  if (!req) return { post: null };
  const res = await fetch(`http://localhost:4200/posts/${ctx.query.id}`);
  const post = await res.json();
  return { post };
}; */

export default Product;
