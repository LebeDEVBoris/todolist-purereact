import React, {Component} from 'react';

import './../../common.sass';
import Header from './../Header/Header';
import SearchBar from './../SearchBar/SearchBar';
import TaskBar from './../TaskBar/TaskBar';
import AddTaskBar from './../AddTaskBar/AddTaskBar';

export default class App extends Component {

    render() {
        return(
           <div className="wrap">
                <div className="app">
                    <Header />
                    <SearchBar />
                    <TaskBar />
                    <AddTaskBar />
                </div>
            </div>
        );
    }
}