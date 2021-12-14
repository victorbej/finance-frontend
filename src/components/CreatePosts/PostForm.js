import React from 'react';

import classes from './Posts.module.scss';

function PostForm({ create }) {

    const [post, setPost] = React.useState({ title: '', url: '', body: '' })

    function addPost(e) {
        e.preventDefault();
        const newPost = { ...post, id: Date.now() };
        setPost({ title: '', url: '', body: '' });
        create(newPost);
    }

    return (
        <div className={classes.inputs}>
            <input className={classes.input} value={post.title} onChange={e => setPost({ ...post, title: e.target.value })} type="text" placeholder="Заголовок" />
            <input className={classes.input} value={post.url} onChange={e => setPost({ ...post, url: e.target.value })} type="url" placeholder="Ссылка на изображение" />
            <input className={classes.input} value={post.body} onChange={e => setPost({ ...post, body: e.target.value })} type="text" placeholder="Описание поста" />
            <button onClick={addPost} type="submit">СОЗДАТЬ</button>
        </div>
    )
}

export default PostForm;