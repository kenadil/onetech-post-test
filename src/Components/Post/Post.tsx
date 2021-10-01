import React from "react";
import "./Post.css";

type PostProps = {
  id: number;
  title: string;
  body: string;
};

const Post = ({ id, title, body }: PostProps) => {
  return (
    <div className="post">
      <div className="post-heading">
        <div className="post-title">{title}</div>
        <div className="post-id">Post id: {id}</div>
      </div>
      <div className="post-body">
        <div className="post-content">{body}</div>
      </div>
    </div>
  );
};

export default Post;
