import { Route, Routes } from "react-router-dom";
import Nav from "../nav";
import Users from "../users/index";

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<Users />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
