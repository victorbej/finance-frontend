import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import React from "react";


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
            <Box sx={{ '& button': { m: 1 }, margin: '2em' }}>
                <div>
                    {listOfTargets.map((task) => (
                        <Button key={task.id} onClick={() => buttonHandler(task)} variant="contained" size="large">
                            {task.name}
                        </Button>
                    ))}
                </div>
            </Box>
            <div>
                {currentTarget.map((item, index) => (
                    <div key={item.id}>
                        {index + 1}. {item.name}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Targets;