
import React, { Component } from 'react';
import list from './list.js';
import Header from './header.js';

class App extends React.Component {

   constructor(props) {
      super(props);

      this.state = {
         term:'',
         items:[]
    };
  }

  onChange=(e)=>{
    this.setState({term: e.target.value});

    onSubmit=(e)=>{
    this.setState({
      term:'',
      items:[...this.state.items,this.state.term]
    });
  }

  }


   render() {
      return (
         <div>
            <form classname="App" onSubmit={this.onSubmit}>
            <input value={this.state.term} onChange={this.onChange}/>
            <button>Submit</button>
            </form>
            <list items={this.state.items} />
         </div>
      );
   }
}

export default App;
