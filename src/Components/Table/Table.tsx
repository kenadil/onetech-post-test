import React, { useEffect, useState } from "react";
import Post from "../Post/Post";
import "./Table.css";

export type TablePostType = {
  title: string;
  id: number;
  body: string;
};

const Table = ({ posts }: any) => {
  const [tablePosts, setTablePosts] = useState<TablePostType[] | []>([]);

  useEffect(() => {
    setTablePosts(posts);
  }, [posts]);
  return (
    <div className="container">
      <div className="inner">
        <div className="table">
          {tablePosts.map((post: TablePostType) => (
            <Post title={post.title} id={post.id} body={post.body} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Table;
