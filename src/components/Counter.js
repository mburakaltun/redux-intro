import React, {Component} from 'react';
import {Label, Badge} from "reactstrap";
import {connect} from "react-redux";

class Counter extends Component {
    render() {
        return (
            <div>
                <Badge color="Primary"> {this.props.counter} </Badge>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {counter: state.counterReducer}
}

export default connect(mapStateToProps)(Counter);