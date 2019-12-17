import React from 'react'
import { Row, Col, Button } from "antd";
import "./styles.css";

import { connect } from 'react-redux';  //connect toi store
import { fetchTaskRequest } from '../../../actions/index';

class DashBoard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: []
        }
    }

    componentDidMount() {
        this.props.fetchTaskRequest();
    }

    render() {
        const { tasks } = this.props
        console.log('tasks', tasks)
        return (
                <div className="dashboard-left">
                    dashboard
                </div>
        )
    }
}

// lay tat ca du lieu task tu store
const mapStateToProps = (state) => {
    return {
        tasks: state.vidu1Reducer
    }
}

// luu du lieu len store
const mapDispatchToProps = (dispatch) => {
    return {
        fetchTaskRequest: (tasks) => {
            dispatch(fetchTaskRequest(tasks));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashBoard);