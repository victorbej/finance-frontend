import './Tools.scss';

function Tools() {
    return (
        <nav className="tools">
            <ul className="tools__container">
                <li className="tools__list">
                    <a href="#" className="tools__item">Конструктор: составьте список финансовых целей</a>
                </li>
                <li className="tools__list">
                    <a href="#" className="tools__item">Калькулятор ипотеки: рассчитайте стоимость квартиры</a>
                </li>
                <li className="tools__list">
                    <a href="#" className="tools__item">Осознанные пукупки: узнайте реальную стоимость покупки</a>
                </li>
            </ul>
        </nav>
    );
}

export default Tools;