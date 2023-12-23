import React, { useState, useEffect } from "react";

export default function ChildrenComponent({ getData }) {
  console.log("render ChildrenComponent");
  const [comments, setComments] = useState([]);
  useEffect(() => {
    getData("comments")
      .then((res) => res.json())
      .then((res) => {
        const comments = res.data;
        setComments(comments);
      });
  }, [getData]);
  const handleClick = () => {
    getData("comments")
      .then((res) => res.json())
      .then((res) => {
        const comments = res.data;
        setComments(["via click", ...comments]);
      });
  };
  return (
    <div>
      <p>Children Component</p>
      <p>{JSON.stringify(comments)}</p>
      <button onClick={handleClick}>Comment Btn</button>
    </div>
  );
}
