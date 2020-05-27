import React, {Component} from 'react';
import './App.css';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import SearchBox from '../components/SearchBox';
import ErrorBoundry from '../components/ErrorBoundry';


class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: ''
    }
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=> response.json())
    .then(users=> this.setState({robots: users}))
    

  }

  onSearchChanges= (event) => {

    this.setState({searchField: event.target.value});

    };
  render() {
    const {robots, searchField} = this.state; // destructring
    const filterRobots = robots.filter(robot=>{
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
    if(!robots.length) {
      return (<h2>Loading</h2>)
    }else {
      return (
        <div className="tc">
          <h1>Robo Friends</h1>
          <SearchBox searchChange={this.onSearchChanges}></SearchBox>
          <Scroll>
            <ErrorBoundry>
              <CardList robots={filterRobots}/>
            </ErrorBoundry>
            
          </Scroll>
        </div>
        
      );
    }
    
  }
  
}

export default App;
