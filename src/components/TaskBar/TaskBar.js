import React from 'react';

import './TaskBar.sass';

import TaskBarItem from './../TaskBarItem/TaskBarItem';

const TaskBar = (props) => {
    
    const {data, onDelete, onImportant, onDone} = props;

    const tasks = data.map((task) => {
        return(
            <TaskBarItem 
            data={task}
            onDelete={onDelete}
            onImportant={onImportant}
            onDone={onDone}
            key={task.id}
            />
        );
    });

    return(
        <div className="taskbar">
            { tasks }
        </div>
    );   
}

export default TaskBar;