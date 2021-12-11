import React, {Component} from 'react';
import {Button} from "reactstrap";
import {decreaseCounter, increaseCounter} from "../redux/actions/counterActions";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

class DecreaseCounter extends Component {
    render() {
        return (
            <div>
                <div>
                    <Button color="primary" onClick={event => {
                        this.props.dispatch(decreaseCounter());
                    }}> Decrease by 1 </Button>
                </div>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {actions: bindActionCreators(decreaseCounter, dispatch)}
}

export default connect(mapDispatchToProps)(DecreaseCounter);