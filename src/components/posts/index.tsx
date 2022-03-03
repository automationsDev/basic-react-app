import { useEffect, useState } from "react";
import Loader from "../Loader";
import User from "../user/User";

export default function Posts() {
  const [posts, setPosts]: [any[], any] = useState([]);
  const [loading, setLoading] = useState(false);
  console.log("posts", posts);

  useEffect(() => {
    setLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=3`)
      .then(async (response) => {
        const posts = await response.json();
        setPosts(posts);
      })
      .catch((error) => {
        console.log("fetch posts error", error);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <h1>posts</h1>
      {loading ? <Loader /> : null}
      <pre>{JSON.stringify(posts, null, 4)}</pre>
    </div>
  );
}
