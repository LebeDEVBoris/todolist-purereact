import React, {Component} from 'react';

import './SearchBar.sass';

export default class SearchBar extends Component {

    render() {
        return(
            <div className="searchbar">
                <form className="searchbar__form">
                    <input type="text" placeholder="Search by tasks"></input>
                </form>
                <div className="searchbar__buttons">
                    <button className="searchbar__all searchbar-btn">All</button>
                    <button className="searchbar__active searchbar-btn">Active</button>
                    <button className="searchbar__done searchbar-btn">Done</button>
                </div>
            </div>
        );
    }
}