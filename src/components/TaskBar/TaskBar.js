import React from 'react';

import './TaskBar.sass';

import TaskBarItem from './../TaskBarItem/TaskBarItem';

const TaskBar = (props) => {

    const data = props.data;

    const tasks = data.map((task) => {
        return(
            <TaskBarItem title={task.title}/>
        );
    });

    return(
        <div className="taskbar">
            { tasks }
        </div>
    );   
}

export default TaskBar;