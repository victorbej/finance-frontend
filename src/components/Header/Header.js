import './Header.scss';

function Header() {
    return (
        <header className="header">
            <h1 className="header__title">Финансовый конструктор</h1>
            <div className="header__user">
                <button type="button" className="header__button">Войти</button>
                <button type="button" className="header__button">Регистрация</button>
            </div>
        </header>
    );
}

export default Header;