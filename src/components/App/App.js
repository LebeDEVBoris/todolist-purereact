import React, {Component} from 'react';

import './../../common.sass';
import Header from './../Header/Header';
import SearchBar from './../SearchBar/SearchBar';
import TaskBar from './../TaskBar/TaskBar';
import AddTaskBar from './../AddTaskBar/AddTaskBar';

export default class App extends Component {

    state = {
        data: [
            {title: 'Drink Coffee', important: false, done: false},
            {title: 'Create application on pure React', important: false, done: false},
            {title: 'Have a lunch', important: false, done: false}
        ]
    };

    render() {
        return(
           <div className="wrap">
                <div className="app">
                    <Header />
                    <SearchBar />
                    <TaskBar data={this.state.data}/>
                    <AddTaskBar />
                </div>
            </div>
        );
    }
}