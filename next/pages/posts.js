import { useState } from "react";
import { useSelector } from "react-redux";
import { selectPosts } from "../redux/postSlice";
import Post from "../components/Post";

function posts() {
  const postsR = useSelector(selectPosts);

  const renderPosts = postsR.map((i) => (
    <div key={i.id}>
      <h3>{i.title}</h3>
      <p>{i.content.substring(0, 100)}</p>
    </div>
  ));
  return (
    <div>
      <Post />
      <h2>posts</h2>
      {renderPosts}
    </div>
  );
}

export default posts;
