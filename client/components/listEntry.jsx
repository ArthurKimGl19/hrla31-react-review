import React from 'react';

class ListEntry extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }
  render(){
    console.log(this.props)
    var { todo } = this.props;
    return (
      <div>
        {todo}
      </div>
    )
  }
}

export default ListEntry;
