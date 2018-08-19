import React, { Component } from 'react';
import { connect } from "react-redux";
import logo from './logo.svg';
import './App.css';

class App extends Component {
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
            <li key={todo}>{todo}</li>
          );
        })}
        </ul>
      </div>
    );
  }
}

// ReduxのStoreの情報をAppのpropsに渡すための関数
const mapStateToProps = state => {
  return {
    todos: state.todos.list
  }
};

// ReduxのStoreの情報をAppのpropsに渡す
export default connect(mapStateToProps)(App);
