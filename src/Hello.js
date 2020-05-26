import React, {Component} from 'react';
import './Hello.css';

class Hello extends Component {
    render(){
        return(
            <div style={{color:'yellow'}} className="tc">Hello
            <p className="welcome">Welcome</p>
            <h1 className="f1"> blah</h1>
        <h2 >{this.props.greeting}</h2>
            </div>
        );
    }
}
export default Hello;