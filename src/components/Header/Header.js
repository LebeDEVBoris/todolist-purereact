import React, {Component} from 'react';
import './Header.sass';

export default class Header extends Component {

    render() {
        return(
            <header className="header">
                <div className="header__name">Boris Lebedev</div>
                <div className="header__counter">3 tasks, 0 done</div>
            </header>
        );
    }
}