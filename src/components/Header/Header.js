import './Header.scss';
import { NavLink } from "react-router-dom";

function Header() {
    return (
        <header className="header">
            <h1 className="header__title">Финансовый конструктор</h1>
            <div className="header__user">
                <NavLink activeclassname="active" className="header__link" to="/tools">Инструменты</NavLink>
                <NavLink activeclassname="active" className="header__link" to="/login">Войти</NavLink>
                <NavLink activeclassname="active" className="header__link" to="/registration">Регистрация</NavLink>
            </div>
        </header>
    );
}

export default Header;