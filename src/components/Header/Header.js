import React, {Component} from 'react';
import './Header.sass';

export default class Header extends Component {

    render() {
        const {counterTasks, counterDoneTasks} = this.props
        return(
            <header className="header">
                <div className="header__name">Boris Lebedev</div>
                <div className="header__counter">{counterTasks} tasks, {counterDoneTasks} done</div>
            </header>
        );
    }
}