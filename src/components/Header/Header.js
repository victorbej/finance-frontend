import './Header.scss';
import { NavLink } from "react-router-dom";

function Header() {
    return (
        <header className="header">
            <NavLink className="header__title" to="/finance-frontend">Финансовый конструктор</NavLink>
            <div className="header__user">
                <NavLink activeclassname="active" className="header__link" to="/finance-frontend">Инструменты</NavLink>
                <NavLink activeclassname="active" className="header__link" to="/login">Войти</NavLink>
                <NavLink activeclassname="active" className="header__link" to="/registration">Регистрация</NavLink>
            </div>
        </header>
    );
}

export default Header;