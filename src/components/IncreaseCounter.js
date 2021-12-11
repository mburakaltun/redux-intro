import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import {increaseCounter} from "../redux/actions/counterActions";
import {connect} from "react-redux";
import {Button} from "reactstrap";

class IncreaseCounter extends Component {
    render() {
        return (
            <div>
                <Button color="primary" onClick={event => {
                    this.props.dispatch(increaseCounter());
                }}> Increase by 1 </Button>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {actions: bindActionCreators(increaseCounter, dispatch)}
}

export default connect(mapDispatchToProps)(IncreaseCounter);