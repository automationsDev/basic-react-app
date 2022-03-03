import { Link } from "react-router-dom";
import styles from "./user.module.css";

export default function User({ id, name, email, website }) {
  return (
    <div className={styles.user}>
      <h1>{name}</h1>
      <h2>{email}</h2>
      <h3>{website}</h3>
      <Link to={`/posts/${id}`}>Posts</Link>
    </div>
  );
}
