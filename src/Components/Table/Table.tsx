import React, { useContext, useEffect, useState } from "react";
import UserContext from "../../Utils/userContext";
import Post from "../Post/Post";
import "./Table.css";

export type TablePostType = {
  title: string;
  id: number;
  userId: number;
  body: string;
};

const Table = ({ posts }: any) => {
  const active = useContext(UserContext);
  const [tablePosts, setTablePosts] = useState<TablePostType[] | []>([]);

  useEffect(() => {
    setTablePosts(posts);
  }, [posts]);
  return (
    <div className="content">
      <div className="container">
        <div className="inner">
          <div className="counter">
            Displayed:{" "}
            {active !== -1
              ? tablePosts.filter((item) => item.userId === active).length
              : tablePosts.length}{" "}
            objects
          </div>
          <div className="table">
            {active !== -1
              ? tablePosts
                  .filter((item) => item.userId === active)
                  .map((post: TablePostType) => (
                    <Post title={post.title} id={post.id} body={post.body} />
                  ))
              : tablePosts.map((post: TablePostType) => (
                  <Post title={post.title} id={post.id} body={post.body} />
                ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
