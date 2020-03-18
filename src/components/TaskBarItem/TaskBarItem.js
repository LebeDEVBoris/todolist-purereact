import React, {Component} from 'react';
import './TaskBarItem.sass';

export default class TaskBarItem extends Component {

    render() {
        return(
            <div className="taskbar__task">
                <div className="taskbar__title">{this.props.title}</div>
                <div className="taskbar__buttons">
                    <div className="taskbar__trash">
                        <i className="fa fa-trash-o"></i>
                    </div>
                    <div className="taskbar__exclamation">
                        <i className="fa fa-exclamation"></i>
                    </div>
                </div>
            </div>
        );
    }
}