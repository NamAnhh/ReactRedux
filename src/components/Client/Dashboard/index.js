import React from 'react'
import { Icon } from "antd";
import Header from '../Header/index';
import Footer from '../Footer/index';

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
            <div>
                {/* header giữ nguyên */}
                <Header />
                <div>
                    {/* màn hình sẽ thay đổi ở đây */}
                    <p>Đây là dashboard</p>
                    <Icon type="smile" />
                </div>
                {/* footer giữ nguyên */}
                <Footer />
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