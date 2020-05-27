import React, {Component} from 'react';

class ErrorBoundry extends Component {
    constructor() {
        super();
        this.state = {
            hasError:false
        };
    }

    componentDidCatch(error, info){
        this.setState({hasError:true});
    }

    render() {
        return(
            this.state.hasError?
                '<h2>Error Occured</h2>'
            : this.props.children
        )
    }
}
export default ErrorBoundry;