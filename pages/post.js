import Layout from "../components/Layout";
import { useRouter } from "next/router";
import { posts } from "../profile";

const Post = ( {currentPost} ) => {
  const router = useRouter();

  return (
    <Layout title={router.query.title} footer={false}>
      <div className="text-center">
        <h1>{currentPost.title}</h1>
        <img
          src={currentPost.imageURL}
          alt=""
          style={{ width: "50%" }}
          className="img-fluid"
        />
        <p className="p-4">{currentPost.content}</p>
      </div>
    </Layout>
  );
};

//get server side props
export async function getServerSideProps(context) {
  const { query } = context;
  const currentPost = posts.filter(
    (post) => post.title === query.title
  )[0];

  return {
    props: {
      currentPost,
    },
  };
}


export default Post;