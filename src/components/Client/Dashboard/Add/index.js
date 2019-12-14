import React from 'react'
import { Button } from 'antd';


import { connect } from 'react-redux';
import {postTask} from '../../../../actions/index';

class AddDashBoard extends React.Component {
    render() {
        return (
            <div>
                <p>Đây là add dashboard</p>
                <Button onClick={this.onAddTask} type="primary">Add task</Button>
            </div>
        )
    }

    onAddTask = () => {
        alert("post task");
    }
}

//map state cua store thanh du lieu cua props
const mapStateToProps = (state) => {
    return {
        DanhSachSanPham: state.vidu1Reducer
    }
}

//map ham post task vao props
const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddTask: (task) => {
            dispatch(postTask(task));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddDashBoard);