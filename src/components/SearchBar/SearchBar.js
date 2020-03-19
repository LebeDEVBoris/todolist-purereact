import React, {Component} from 'react';

import './SearchBar.sass';

export default class SearchBar extends Component {

    state = {
        val: ''
    }

    onSearchChange = this.props.onSearchChange;
    onFilterChange = this.props.onFilterChange;

    onChange = (e) => {
        this.setState({val: e.target.value});
        this.onSearchChange(e.target.value);
    }

    render() {
        return(
            <div className="searchbar">
                <form className="searchbar__form">
                    <input onChange={this.onChange} type="text" placeholder="Search by tasks"></input>
                </form>
                <div className="searchbar__buttons">
                    <button onClick={() => this.onFilterChange('all')} className="searchbar__all searchbar-btn">All</button>
                    <button onClick={() => this.onFilterChange('active')} className="searchbar__active searchbar-btn">Active</button>
                    <button onClick={() => this.onFilterChange('done')} className="searchbar__done searchbar-btn">Done</button>
                    <button onClick={() => this.onFilterChange('important')} className="searchbar__important searchbar-btn">Important</button>
                </div>
            </div>
        );
    }
}