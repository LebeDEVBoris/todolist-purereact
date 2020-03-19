import React, {Component} from 'react';

import './../../common.sass';
import Header from './../Header/Header';
import SearchBar from './../SearchBar/SearchBar';
import TaskBar from './../TaskBar/TaskBar';
import AddTaskBar from './../AddTaskBar/AddTaskBar';

export default class App extends Component {

    idForNewElems = 4;

    state = {
        data: [
            {title: 'Drink Coffee', important: false, done: false, id: 1},
            {title: 'Create application on pure React', important: false, done: false, id: 2},
            {title: 'Have a lunch', important: false, done: false, id: 3}
        ],
        searchBy: '',
        filter: 'all'
    };

    counterTasks = () => {
        let counter = 0;
        this.state.data.forEach((elem) => {
            counter++;
        });
        return counter;
    }

    counterDoneTasks = () => {
        let counter = 0;
        this.state.data.forEach((elem) => {
            if (elem.done === true) {
                counter++;
            }
        });
        return counter;
    }

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

    onItemAdd = (title) => {
        const elem = {title: title, important: false, done: false, id: this.idForNewElems};
        const arr = this.state.data;
        arr.push(elem);
        this.idForNewElems++;
        this.setState({data: arr});
    }

    render() {
        
        let counterTasks = this.counterTasks();
        let counterDoneTasks = this.counterDoneTasks();
    
        return(
           <div className="wrap">
                <div className="app">
                    <Header counterTasks={counterTasks} counterDoneTasks={counterDoneTasks} />
                    <SearchBar />
                    <TaskBar 
                        data={this.state.data} 
                        onDelete={this.onDelete}
                        onImportant={this.onImportant}
                        onDone={this.onDone}
                        />
                    <AddTaskBar onItemAdd={this.onItemAdd}/>
                </div>
            </div>
        );
    }
}