import './Tools.scss';
import { Link } from "react-router-dom";

function Tools() {
    return (
        <nav className="tools">
            <ul className="tools__container">
                <li className="tools__list">
                    <Link className="tools__item" to="/constructor">Конструктор: составьте список финансовых целей</Link>
                </li>
                <li className="tools__list">
                    <Link className="tools__item" to="/calculator">Калькулятор ипотеки: рассчитайте стоимость квартиры</Link>
                </li>
                <li className="tools__list">
                    <Link className="tools__item" to="/purchase">Осознанные пукупки: узнайте реальную стоимость покупки</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Tools;