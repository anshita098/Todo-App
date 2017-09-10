import React from 'react';

class list extends React.Component {

  render() {
    const {todo} = this.props;
    return (
      <div>
        <ul>
          <li>{todo.text}</li>
        </ul>
      </div>
    )
  }
}

export default list;
