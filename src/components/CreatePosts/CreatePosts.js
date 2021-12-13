import React from 'react';
import PostLists from './PostLists';

import classes from './Posts.module.scss';

function CreatePosts() {
    const [posts, setPosts] = React.useState([
        { id: 1, url: 'https://images.unsplash.com/photo-1633311905139-7b6088a69e33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80', title: 'Искусственный интеллект', body: 'В этот сектор входят разработки в области машинного обучения, нейросетей, робототехники, распознавания лица и речи. Благодаря нейросетям бортовой компьютер самоуправляемого транспорта может отличить пешехода от прочих объектов на трассе. Инвестировать в искусственный интеллект и робототехнику можно через несколько фондов: IRBO, ROBO, BOTZ, ROBT. Мне понравился глобальный фонд IRBO — iShares Robotics and Artificial Intelligence ETF. Он самый свежий: запущен в августе 2018 года. Стоимость обслуживания значительно ниже, чем у конкурентов, — 0,47%.' }
    ]);
    const [post, setPost] = React.useState({ title: '', url: '', body: '' })

    const pageTitle = ['Создайте свой пост об инвестициях'];

    function addPost(e) {
        e.preventDefault();
        setPosts([...posts, { ...post, id: Date.now() }]);
        setPost({ title: '', url: '', body: '' });
    }

    return (
        <div className="Posts">
            <h2 className={classes.pageTitle}>{pageTitle}</h2>
            <div className="container">
                <PostLists posts={posts} />
                <div className={classes.inputs}>
                    <input className={classes.input} value={post.title} onChange={e => setPost({ ...post, title: e.target.value })} type="text" placeholder="Заголовок" />
                    <input className={classes.input} value={post.url} onChange={e => setPost({ ...post, url: e.target.value })} type="url" placeholder="Ссылка на изображение" />
                    <input className={classes.input} value={post.body} onChange={e => setPost({ ...post, body: e.target.value })} type="text" placeholder="Описание поста" />
                    <button onClick={addPost} type="submit">СОЗДАТЬ</button>
                </div>
            </div>
        </div>
    )
}

export default CreatePosts;