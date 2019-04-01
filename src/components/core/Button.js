import React, { Component } from 'react';

class Button extends Component {
    render() {
        return(
            <button type="button" className="btn btn-primary m-2" onClick={() => {this.props.onClick()}}>{this.props.children}</button>
        );
    }
}


export default Button;