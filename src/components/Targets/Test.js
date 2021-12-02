import React from "react";

const listOfTasks = [
    { id: 0, name: "Заработать на машину" },
    { id: 1, name: "Войти в айти" },
    { id: 2, name: "Получить премию" },
];

const Targets = () => {
    const [currentList, setCurrentList] = React.useState([]);

    const buttonHandler = (task) => {
        const isInList = !!currentList.find((item) => item.id === task.id);
        const newList = isInList
            ? currentList.filter((item) => item.id !== task.id)
            : [...currentList, task];
        setCurrentList(newList);
    };

    return (
        <div>
            <div>
                {listOfTasks.map((task) => (
                    <button key={task.id} onClick={() => buttonHandler(task)}>
                        {task.name}
                    </button>
                ))}
            </div>
            <div>
                {currentList.map((item) => (
                    <div key={item.id}>{item.name}</div>
                ))}
            </div>
        </div>
    );
};