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

    onSearchChange = (val) => {
        this.setState({searchBy: val});
    }

    onSearch = (items, substring) => {
        if (substring.length === 0) return items;
        return items.filter((item) => {
            substring = substring.toLowerCase();
            const title = item.title.toLowerCase();
            return title.indexOf(substring) > -1;
        });
    }

    onFilterChange = (val) => {
        this.setState({filter: val});
    }

    onFilter = (mode) => {
        let arr = [];

        if (mode === 'all') {
            return this.state.data;
        }

        if (mode === 'active') {
            this.state.data.forEach((elem) => {
                if (!elem.done) {
                    arr.push(elem);
                }
            });
        }

        if (mode === 'done') {
            this.state.data.forEach((elem) => {
                if (elem.done) {
                    arr.push(elem);
                }
            });
        }

        if (mode === 'important') {
            this.state.data.forEach((elem) => {
                if (elem.important) {
                    arr.push(elem);
                }
            });
        }
        return arr;
    }

    componentDidMount() {
        this.onFilter(this.state.filter);
    }


    render() {
        
        let counterTasks = this.counterTasks();
        let counterDoneTasks = this.counterDoneTasks();
        
        const filterElems = this.onFilter(this.state.filter);
        const elems = this.onSearch(filterElems, this.state.searchBy);
    

        return(
           <div className="wrap">
                <div className="app">
                    <Header 
                        counterTasks={counterTasks} 
                        counterDoneTasks={counterDoneTasks} 
                    />
                    <SearchBar 
                        onSearchChange={this.onSearchChange}
                        onFilterChange={this.onFilterChange}
                    />
                    <TaskBar 
                        data={elems} 
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
