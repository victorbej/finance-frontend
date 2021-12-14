import React from "react";

import classes from './Posts.module.scss';

function CountLikes() {
  const [like, setLike] = React.useState(0);

  const likeHandler = () => {
    setLike(like + 1);
  };

  const dislikeHandler = () => {
    setLike((i) => Math.max(i - 1, 0));
  };

  return (
    <div className={classes.counter}>
      <h2 className={classes.count}>{like}</h2>
      <button onClick={likeHandler}>👍</button>
      <button onClick={dislikeHandler}>👎</button>
    </div>
  );
}

export default CountLikes;