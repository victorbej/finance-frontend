import React from "react";
import classes from './Targets.module.scss'


const listOfTargets = [
    { id: 0, name: "Заработать на машину" },
    { id: 1, name: "Погасить кредиты" },
    { id: 2, name: "Получить премию" },
    { id: 3, name: "Заработать на квартиру" },
    { id: 4, name: "Заплатить налоги" },
    { id: 5, name: "Научиться ивестировать" },
    { id: 6, name: "Вложиться в недвижимость" },
    { id: 7, name: "Разбогатеть" }
];

function Targets() {
    const [currentTarget, setCurrentTarget] = React.useState([]);

    const buttonHandler = (task) => {
        const isInList = !!currentTarget.find((item) => item.id === task.id);
        const newList = isInList
            ? currentTarget.filter((item) => item.id !== task.id)
            : [...currentTarget, task];
        setCurrentTarget(newList);
    };

    return (
        <div>
            <div className={classes.buttonContainer}>
                {listOfTargets.map((task) => (
                    <button className={classes.button} key={task.id} onClick={() => buttonHandler(task)}>
                        {task.name}
                    </button>
                ))}
            </div>
            <div>
                {currentTarget.map((item, index) => (
                    <div key={item.id}>{index + 1}. {item.name}</div>
                ))}
            </div>
        </div>
    );
};

export default Targets;