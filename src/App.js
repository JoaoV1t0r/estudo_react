import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component{

  constructor(props){
    super(props);
    this.handlePClick = this.handlePClick.bind(this);
    this.state = {
      name: 'Vitor',
      counter: 0
    };
  };

  handlePClick() {
    // const {name} = this.state;
    // console.log(`Click <p> ${name}`)
    this.setState({name: 'João'});
  };

  handleAClick = (event) => {
    event.preventDefault();
    const {counter} = this.state;
    this.setState({counter: counter + 1})
    console.log(counter)
  };

  render(){
    const {name} = this.state;
     return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={this.handlePClick} >
          Hello {name}!!!!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          onClick={this.handleAClick}
        >
          Este é o Link
        </a>
      </header>
    </div>
  );
  }
}

export default App;
