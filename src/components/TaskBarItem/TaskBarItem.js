import React, {Component} from 'react';
import './TaskBarItem.sass';

export default class TaskBarItem extends Component {

    onDelete = this.props.onDelete;
    onImportant = this.props.onImportant;
    onDone = this.props.onDone;

    render() {

        let onImportantClasses = 'taskbar__task';
        
        if (this.props.data.important) {
            onImportantClasses += ' important';
        }

        if (this.props.data.done) {
            onImportantClasses += ' done';
        }
    

        return(
            <div className={onImportantClasses}>
                <div className="taskbar__title" onClick={() => this.onDone(this.props.data.id)}>{this.props.data.title}</div>
                <div className="taskbar__buttons">
                    <div className="taskbar__trash" onClick={() => this.onDelete(this.props.data.id)}>
                        <i className="fa fa-trash-o"></i>
                    </div>
                    <div className="taskbar__exclamation" onClick={() => this.onImportant(this.props.data.id)}>
                        <i className="fa fa-exclamation"></i>
                    </div>
                </div>
            </div>
        );
    }
}