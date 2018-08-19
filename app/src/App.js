import React, { Component } from 'react';
import { connect } from "react-redux";
import { addToDo, removeToDo, addNote, removeNote } from './actions';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      inputNote: "",
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
        {/* TODO */}
        {this.props.todos.map(todo => {
          return (
            <li key={todo}>
              <span>{todo}</span>
              <button onClick={()=> this.props.onRemoveToDo(todo)}>削除</button>
            </li>
          );
        })}
        </ul>

        {/* 文字の更新をstateに反映 */}
        <input type="text" onChange={e => this.setState({input: e.target.value})}/>
        {/* Actionをdispatchして実行する */}
        <button onClick={()=> this.props.onAddToDo(this.state.input)}>
          追加
        </button>

        <ul>
        {/* NOTE */}
        {this.props.notes.map(note => {
          return (
            <li key={note}>
              <span>{note}</span>
              <button onClick={()=> this.props.onRemoveNote(note)}>削除</button>
            </li>
          );
        })}
        </ul>

        {/* 文字の更新をstateに反映 */}
        <input type="text" onChange={e => this.setState({inputNote: e.target.value})}/>
        {/* Actionをdispatchして実行する */}
        <button onClick={()=> this.props.onAddNote(this.state.inputNote)}>
          追加
        </button>
  
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos.list,
    notes: state.notes.notes
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onAddToDo(todo) {
      dispatch(addToDo(todo))
    },
    onRemoveToDo(todo) {
      dispatch(removeToDo(todo))
    },
    onAddNote(note) {
      dispatch(addNote(note))
    },
    onRemoveNote(note) {
      dispatch(removeNote(note))
    },
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);