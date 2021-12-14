import React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import CountLikes from './CountLikes';

import classes from './Posts.module.scss';

function PostLists(props) {

    return (
        <ul>
            {props.posts.map((post, index) =>
                <li key={index}>
                    <h2 className={classes.postTitle}>{post.title}</h2>
                    <img className={classes.postImage} src={post.url} alt={post.title} />
                    <p className={classes.postBody}>{post.body}</p>
                    <div className={classes.container}>
                        <Button variant="contained" className={classes.deleteButton} startIcon={<DeleteIcon />} onClick={() => props.remove(post)}>Удалить пост</Button>
                        <CountLikes />
                    </div>

                </li>
            )}
        </ul>
    )
}

export default PostLists;