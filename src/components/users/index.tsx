import { useEffect, useState } from "react";
import Loader from "../Loader";
import User from "../user/User";

export default function Users() {
  const [users, setUsers]: [any[], any] = useState([]);
  const [loading, setLoading] = useState(false);
  console.log("users", users);

  useEffect(() => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(async (response) => {
        const users = await response.json();
        setUsers(users);
      })
      .catch((error) => {
        console.log("fetch user error", error);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <h1>Users</h1>
      {loading ? <Loader /> : null}
      {users.map((user, idx) => (
        <User key={idx} {...user} />
      ))}
    </div>
  );
}
