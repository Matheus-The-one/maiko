import React, { useState } from "react";

const CommentForm = ({ submitLabel, handleSubmit }) => {
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit(text); // No parentId since it's a root comment
    setText("");
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Your comment"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-default">
        {submitLabel}
      </button>
    </form>
  );
};

export default CommentForm;
