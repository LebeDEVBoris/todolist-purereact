import React, {Component} from 'react';

import './../../common.sass';
import Header from './../Header/Header';
import SearchBar from './../SearchBar/SearchBar';
import TaskBar from './../TaskBar/TaskBar';
import AddTaskBar from './../AddTaskBar/AddTaskBar';

export default class App extends Component {

    state = {
        data: [
            {title: 'Drink Coffee', important: false, done: false, id: 1},
            {title: 'Create application on pure React', important: false, done: false, id: 2},
            {title: 'Have a lunch', important: false, done: false, id: 3}
        ]
    };

    onDelete = (id) => {
        const idx = this.state.data.findIndex((el) => el.id === id);
        const newArray = [
            ...this.state.data.slice(0, idx),
            ...this.state.data.slice(idx + 1)
        ];
        this.setState({data: newArray});
    }

    onImportant = (id) => {
        const arr = this.state.data;
        arr.forEach((elem) => {
            if (elem.id === id) elem.important = !elem.important;
        });
        this.setState({data: arr});
    }

    onDone = (id) => {
        const arr = this.state.data;
        arr.forEach((elem) => {
            if (elem.id === id) elem.done = !elem.done;
        });
        this.setState({data: arr});
    }

    render() {
        return(
           <div className="wrap">
                <div className="app">
                    <Header />
                    <SearchBar />
                    <TaskBar 
                        data={this.state.data} 
                        onDelete={this.onDelete}
                        onImportant={this.onImportant}
                        onDone={this.onDone}
                        />
                    <AddTaskBar />
                </div>
            </div>
        );
    }
}