import React from 'react';
import './Login.scss';

function Login() {
    return (
        <div className="login">
            <form className="login-form">
                <h2 className="login-form__title">Авторизация</h2>
                <input className="login-form__username" type="name" placeholder="Введите имя пользователя"></input>
                <input className="login-form__email" type="email" placeholder="Введите email"></input>
                <button className="login-form__submit" type="button">Войти</button>
            </form>
        </div>
    );
}

export default Login;