import React, { useEffect, useState } from "react";
import "./App.css";
import Table, { TablePostType } from "./Components/Table/Table";
import UserList from "./Components/UserList/UserList";

function App() {
  const [posts, setPosts] = useState<TablePostType[] | []>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);
  return (
    <div className="App">
      <UserList />
      <Table posts={posts} />
    </div>
  );
}

export default App;
