import React from "react";
import LikeButton from "./likebutton";

const PostCard = ({ post }) => {
  return (
    <div style={styles.card}>
      <img src={post.profilePic} alt={post.username} style={styles.image} />
      <h3>{post.username}</h3>
      <p>{post.content}</p>
      <LikeButton />
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #ddd",
    padding: "15px",
    borderRadius: "10px",
    margin: "10px",
    maxWidth: "300px",
    boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.1)",
  },
  image: {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    objectFit: "cover",
  },
};

export default PostCard;