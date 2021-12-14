import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import classes from './Posts.module.scss';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        background: { default: "#161616" },
        text: { primary: "#fff", secondary: "#fff" }
    },
});

function PostForm({ create }) {

    const [post, setPost] = React.useState({ title: '', url: '', body: '' })

    function addPost(e) {
        e.preventDefault();
        const newPost = { ...post, id: Date.now() };
        setPost({ title: '', url: '', body: '' });
        create(newPost);
    }

    return (
        <ThemeProvider theme={theme}>
            <div className={classes.inputs}>
                <TextField id="outlined-basic" label="Заголовок" variant="outlined" value={post.title} onChange={e => setPost({ ...post, title: e.target.value })} type="text" />
                <TextField id="outlined-basic" label="Ссылка на изображение" variant="outlined" value={post.url} onChange={e => setPost({ ...post, url: e.target.value })} type="url" />
                <TextField id="outlined-basic" label="Описание поста" variant="outlined" value={post.body} onChange={e => setPost({ ...post, body: e.target.value })} type="text" />
                <Button variant="contained" onClick={addPost} type="submit">СОЗДАТЬ</Button>
            </div>
        </ThemeProvider>
    )
}

export default PostForm;