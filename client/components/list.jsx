import React from 'react';
import ListEntry from './listEntry.jsx';

class List extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      todo: '',
      todos: []
    }
    this.handleTodoChange = this.handleTodoChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleTodoChange(e){
    this.setState({
      todo: e.target.value
    }, () => {console.log('Todo ', this.state.todo)})
  }
  handleSubmit(e){
    e.preventDefault();
    // this.setState(prevState => ({
    //   todos: [...prevState.todo, this.state.todo]
    // }), () => {console.log('Todos ', this.state.todos)})
    this.setState({
      todos: [...this.state.todos, this.state.todo]
    }, () => {console.log('Todos ', this.state.todos)})
    document.getElementById('form').reset()
  }
  render (){
    return (
      <div>
    <form id='form' onSubmit={this.handleSubmit}>
      <label>
        Todo:
        <input type='text' required onChange={this.handleTodoChange}/>
      </label>
      <input type='submit' value='Submit' />
    </form>
    {this.state.todos.map((todo, i) => {
      return (
        <ListEntry todo={todo} key={i}/>
      )
    })}
    </div>
    )
  }
}
export default List;