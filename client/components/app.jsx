import React from 'react';
import List from './list.jsx'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      first: '',
      last: ''
    };
    this.handleChangeFirst = this.handleChangeFirst.bind(this);
    this.handleChangeLast = this.handleChangeLast.bind(this);
  }

  handleChangeFirst(e){
    this.setState({
      first: e.target.value
    }, () => {console.log('First ', this.state.first)})
  }
  handleChangeLast(e){
    this.setState({
      last: e.target.value
    }, () => {console.log('Last ', this.state.last)})
  }
  render () {
    // var { first, last } = this.props;
    return (
      <div>
        {this.props.first === this.state.first && this.props.last === this.state.last ? (
          <List /> 
        ): (
          <form>
          <label>
          First:
         <input type="text" onChange={this.handleChangeFirst} />
          </label>
         <label>
         Last:
         <input type="text" onChange={this.handleChangeLast} />
         </label>
         </form>
        )}
      </div>
    )    
  }
}

export default App;