import React from 'react';
import './Registration.scss';

function Registration() {
    return (
        <div className="registration">
            <form className="registration-form">
                <h2 className="registration-form__title">Регистрация</h2>
                <input className="registration-form__username" type="name" placeholder="Введите имя пользователя"></input>
                <input className="registration__email" type="email" placeholder="Введите email"></input>
                <button className="registration__submit" type="button">Зарегистрироваться</button>
            </form>
        </div>
    );
}

export default Registration;