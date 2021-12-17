import React from 'react';
import classes from './Main.module.scss';

function Main() {

    const info = {
        title: 'Привет',
        emoji: '✌️',
        body: 'Это мой небольшой pet project, в котором представлены компактные React приложения для учета финансов. Приложение еще в процессе разработки и будет масштабироваться.'
    }

    return (
        <div>
            <h2 className={classes.greeting}>{info.title} {info.emoji}</h2>
            <p className={classes.about}>{info.body}</p>
        </div>
    );
}

export default Main;
