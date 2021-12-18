import React from 'react';
import PostLists from './PostLists';
import PostForm from './PostForm';

import classes from './Posts.module.scss';

export default function CreatePosts() {

    const pageTitle = ['Создайте свой пост об инвестициях или финансах'];

    const [posts, setPosts] = React.useState([
        { id: 1, url: 'https://images.unsplash.com/photo-1633311905139-7b6088a69e33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80', title: 'Искусственный интеллект', body: 'В этот сектор входят разработки в области машинного обучения, нейросетей, робототехники, распознавания лица и речи. Благодаря нейросетям бортовой компьютер самоуправляемого транспорта может отличить пешехода от прочих объектов на трассе. Инвестировать в искусственный интеллект и робототехнику можно через несколько фондов: IRBO, ROBO, BOTZ, ROBT. Мне понравился глобальный фонд IRBO — iShares Robotics and Artificial Intelligence ETF. Он самый свежий: запущен в августе 2018 года. Стоимость обслуживания значительно ниже, чем у конкурентов, — 0,47%.' }
    ]);

    function createPost(newPost) {
        setPosts([...posts, newPost]);
    }

    function remove(post) {
        const isInList = !!posts.find((item) => item.id === post.id);
        const newList = isInList
            ? posts.filter((item) => item.id !== post.id)
            : [...posts, post];
        setPosts(newList);
    }

    return (
        <div className="container">
            <h2 className={classes.pageTitle}>{pageTitle}</h2>
            {posts.length !== 0
                ? <PostLists remove={remove} posts={posts} />
                : <h2 className={classes.empty}>Посты не найдены, их необходимо создать...</h2>
            }
            <PostForm create={createPost} />
        </div>
    );
}