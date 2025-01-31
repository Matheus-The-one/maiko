import React, { useState, useEffect } from "react";
import './Comments.css'; // Link your CSS file here
import CommentForm from "./CommentForm";
import Comment from "./Comment";
import {
  getComments as getCommentsApi,
  createComment as createCommentApi,
  updateComment as updateCommentApi,
  deleteComment as deleteCommentApi,
} from "../../api";
import Warning from "../warning/Warning";
import Footer from "../Footer/Footer";

const Comments = ({ commentsUrl, currentUserId }) => {
  const [comments, setComments] = useState([]);
  const [activeComment, setActiveComment] = useState(null);

  const addComment = (text, parentId = null) => {
    createCommentApi(text, parentId).then((comment) => {
      setComments([comment, ...comments]);
      setActiveComment(null);
    });
  };

  const updateComment = (text, commentId) => {
    updateCommentApi(text).then(() => {
      const updatedComments = comments.map((comment) =>
        comment.id === commentId
          ? { ...comment, body: text, updatedAt: new Date() }
          : comment
      );
      setComments(updatedComments);
      setActiveComment(null);
    });
  };

  const deleteComment = (commentId) => {
    deleteCommentApi(commentId).then(() => {
      const updatedComments = comments.filter(
        (comment) => comment.id !== commentId
      );
      setComments(updatedComments);
      setActiveComment(null);
    });
  };

  useEffect(() => {
    getCommentsApi(commentsUrl).then((comments) => {
      setComments(comments);
    });
  }, [commentsUrl]);

  return (
    <>
    <div className="commentSection">
      <div className="titleBox">
        <label>Discussion</label>
      </div>
      <div className="commentBox">
        <div className="actionBox">
          <ul className="commentList">
            {comments.map((comment) => (
              <Comment
                key={comment.id}
                comment={comment}
                addComment={addComment}
                deleteComment={deleteComment}
                updateComment={updateComment}
                activeComment={activeComment}
                setActiveComment={setActiveComment}
                currentUserId={currentUserId}
              />
            ))}
          </ul>
          <CommentForm submitLabel="Add Comment" handleSubmit={addComment} />
        </div>
      </div>
    </div>
    <Warning/>
    <Footer/>
    </>
  );
};

export default Comments;
