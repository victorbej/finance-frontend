import React from "react";
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
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
      <ButtonGroup variant="text" aria-label="text button group">
        <Button onClick={likeHandler}>👍</Button>
        <Button onClick={dislikeHandler}>👎</Button>
      </ButtonGroup>
    </div>
  );
}

export default CountLikes;