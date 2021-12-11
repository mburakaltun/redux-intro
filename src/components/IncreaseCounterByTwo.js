import React, {Component} from 'react';
import {Button} from "reactstrap";
import {increaseCounter, increaseCounterByTwo} from "../redux/actions/counterActions";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

class IncreaseCounterByTwo extends Component {
    render() {
        return (
            <div>
                <div>
                    <Button color="primary" onClick={event => {
                        this.props.dispatch(increaseCounterByTwo());
                    }}> Increase by 2 </Button>
                </div>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {actions: bindActionCreators(increaseCounterByTwo, dispatch)}
}

export default connect(mapDispatchToProps)(IncreaseCounterByTwo);