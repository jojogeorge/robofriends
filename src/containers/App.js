import React, {Component} from 'react';
import {connect} from 'react-redux'
import './App.css';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import Header from '../components/Header';
import SearchBox from '../components/SearchBox';
import ErrorBoundry from '../components/ErrorBoundry';
import {setSearchField, requestRobots} from '../actions.js'


const mapStateToProps = state => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
  onSearchChanges: (event) => dispatch(setSearchField(event.target.value)),
  onRequestRobots:() =>  dispatch(requestRobots())
  }
}

class App extends Component {

  componentDidMount() {
    this.props.onRequestRobots();

  }

  render() {
    const {searchField, onSearchChanges, robots, isPending} = this.props;
    const filterRobots = robots.filter(robot=>{
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
    if(isPending) {
      return (<h2>Loading</h2>)
    }else {
      return (
        <div className="tc">
          <Header/>
          <SearchBox searchChange={onSearchChanges}></SearchBox>
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
