import React, { useEffect, useState } from "react";
import "./App.css";
import Table, { TablePostType } from "./Components/Table/Table";
import UserList from "./Components/UserList/UserList";
import UserContext from "./Utils/userContext";

function App() {
  const [posts, setPosts] = useState<TablePostType[] | []>([]);

  const [active, setActive] = useState(-1);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);
  return (
    <UserContext.Provider value={active}>
      <div className="App">
        <UserList posts={posts} setActive={setActive} />
        <Table posts={posts} />
      </div>
    </UserContext.Provider>
  );
}

export default App;
