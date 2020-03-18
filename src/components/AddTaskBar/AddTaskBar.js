import React, {Component} from 'react';

import './AddTaskBar.sass';

export default class AddTaskBar extends Component {

    render() {
        return(
            <div className="addtaskbar">
                <form className="addtaskbar__form">
                    <input type="text" placeholder="Enter the title of task"></input>
                </form>
                <button className="addtaskbar__btn">Add</button>
            </div>
        );
    }
}