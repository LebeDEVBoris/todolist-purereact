import React, {Component} from 'react';

import './AddTaskBar.sass';

export default class AddTaskBar extends Component {

    state = {
        val: '',
        err: false
    }

    onChange = (e) => {
        this.setState({val: e.target.value});
    } 

    AddItem = (e) => {
        const val = this.state.val;

        // checking by validate string
        let flag = false;
        for (let i = 0; i < val.length; i++) {
            if ((val[i] !== '') || (val[i] !== ' ')) {
                flag = true;
            }
        }
        if (flag === false) {
            this.setState({err: true});
        }
        else {
            this.setState({val: ''});
            this.props.onItemAdd(val);
        }
    }

    render() {
        
        if (this.state.err) {
            return(
                <>
                    <h1 className="error__emptystring">You cannot write down empty string (or which contains only spaces). Please, try again</h1>
                    <button className="error__emptystring-btn" onClick={() => this.setState({err: false})}>OK</button>
                </>
            );
        }

        return(
            <div className="addtaskbar" id="addtaskbar">
                <form className="addtaskbar__form">
                    <input type="text" onChange={this.onChange} value={this.state.val} placeholder="Enter the title of task"></input>
                </form>
                <button className="addtaskbar__btn" onClick={this.AddItem}>Add</button>
            </div>
        );
    }
}