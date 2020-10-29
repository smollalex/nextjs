import React from "react";

const Like = props => {
  const classes = props.liked === true ? "fas fa-heart" : "far fa-heart";
  return (
    <i
      onClick={props.onClick}
      style={{ cursor: "pointer" }}
      className={classes}
    ></i>
  );
};

export default Like;
