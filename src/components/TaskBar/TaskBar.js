import React, {Component} from 'react';

import './TaskBar.sass';

export default class TaskBar extends Component {

    render() {
        return(
            <div className="taskbar">
                <div className="taskbar__task">
                    <div className="taskbar__title">Drink Coffee</div>
                    <div className="taskbar__buttons">
                        <div className="taskbar__trash">
                            <i className="fa fa-trash-o"></i>
                        </div>
                        <div className="taskbar__exclamation">
                            <i className="fa fa-exclamation"></i>
                        </div>
                    </div>
                </div>
                <div className="taskbar__task">
                    <div className="taskbar__title">Drink Coffee</div>
                    <div className="taskbar__buttons">
                        <div className="taskbar__trash">
                            <i className="fa fa-trash-o"></i>
                        </div>
                        <div className="taskbar__exclamation">
                            <i className="fa fa-exclamation"></i>
                        </div>
                    </div>
                </div>
                <div className="taskbar__task">
                    <div className="taskbar__title">Drink Coffee</div>
                    <div className="taskbar__buttons">
                        <div className="taskbar__trash">
                            <i className="fa fa-trash-o"></i>
                        </div>
                        <div className="taskbar__exclamation">
                            <i className="fa fa-exclamation"></i>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}