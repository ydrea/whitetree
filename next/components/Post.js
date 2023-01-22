import { useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { addIt } from "../redux/postSlice";

export const Post = () => {
  const dispatch = useDispatch();
  const [title, titleSet] = useState("");
  const onTitleChange = (e) => titleSet(e.target.value);
  const [content, contentSet] = useState("");
  const onContentChange = (e) => contentSet(e.target.value);

  const handleSubmit = () => {
    if (title && content) {
      dispatch(
        addIt({
          id: nanoid,
          title,
          content,
        })
      );
      titleSet("");
      contentSet("");
    } else {
      console.log("zilch");
    }
  };

  return (
    <div>
      <h2>add</h2>
      <form>
        <label htmlFor="posTitle">Title</label>
        <input
          type="text"
          name="posTitle"
          id="posTitle"
          value={title}
          onChange={onTitleChange}
        />
        <label htmlFor="postContent">Content</label>
        <input
          type="text"
          name="postContent"
          id="postContent"
          value={content}
          onChange={onContentChange}
        />
        <button onClick={handleSubmit}>submit</button>
      </form>
    </div>
  );
};
export default Post;
