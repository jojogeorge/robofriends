import React, {Component} from 'react';

class Header extends Component {
    shouldComponentUpdate(nextProps, nextState){ //avoid unecessary rendering
        return false;
    }

    
    render() {
        console.log('header');
        return (
            <h1>Robo Friends</h1>
        )
    }
}
export default Header;
