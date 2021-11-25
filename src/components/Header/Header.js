import './Header.scss';
import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="header">
            <h1 className="header__title">Финансовый конструктор</h1>
            <div className="header__user">
                <Link className="header__link" to="/tools">Инструменты</Link>
                <Link className="header__link" to="/login">Войти</Link>
                <Link className="header__link" to="/registration">Регистрация</Link>
            </div>
        </header>
    );
}

export default Header;