import React, { Component } from 'react';
import { connect } from "react-redux";
import { addToDo, removeToDo } from './actions';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: ""
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React Redux Todo List</h1>
        </header>
        <ul>
        {this.props.todos.map(todo => {
          return (
            <li key={todo}>
              <span>{todo}</span>
              <button onClick={()=> this.props.dispatch(removeToDo(todo))}>削除</button>
            </li>
          );
        })}
        </ul>

        {/* 文字の更新をstateに反映 */}
        <input type="text" onChange={e => this.setState({input: e.target.value})}/>
        {/* Actionをdispatchして実行する */}
        <button onClick={()=> this.props.dispatch(addToDo(this.state.input))}>
          追加
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos.list
  }
};

export default connect(mapStateToProps)(App);