import { Route, Routes } from "react-router-dom";
import Nav from "../components/nav";
import Posts from "../components/posts";
import Users from "../components/users";

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/posts/:userId" element={<Posts />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
