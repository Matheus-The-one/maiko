import React, { useState } from "react";

const Comment = ({
  comment,
  addComment,
  updateComment,
  deleteComment,
  activeComment,
  setActiveComment,
  currentUserId,
}) => {
  const [replyText, setReplyText] = useState("");

  const handleReplySubmit = () => {
    addComment(replyText, comment.id);
    setReplyText("");
  };

  const handleEdit = () => {
    setActiveComment(comment);
  };

  const handleDelete = () => {
    deleteComment(comment.id);
  };

  return (
    <li>
      <div className="commenterImage">
        <img
          src="http://placekitten.com/50/50"
          alt="avatar"
        />
      </div>
      <div className="commentText">
        <p>{comment.body}</p>
        <span className="subText">on {new Date(comment.createdAt).toLocaleDateString()}</span>
        {currentUserId === comment.userId && (
          <div>
            <button onClick={handleEdit}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
          </div>
        )}
        <div className="form-inline">
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              value={replyText}
              onChange={(e) => setReplyText(e.target.value)}
              placeholder="Your reply"
            />
          </div>
          <div className="form-group">
            <button className="btn btn-default" onClick={handleReplySubmit}>
              Reply
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default Comment;
