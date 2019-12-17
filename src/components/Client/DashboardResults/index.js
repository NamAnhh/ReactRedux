import React from 'react'
import { Table } from "antd";
import "./styles.css";

import { connect } from 'react-redux';  //connect toi store
import { fetchTaskRequest } from '../../../actions/index';

class DashboardResults extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            results: [
                { city: 'TP. Hồ Chí Minh', gold: '1', silver: '2', bronze: '5', total: '10' },
                { city: 'Hà Nội', gold: '1', silver: '2', bronze: '5', total: '10' },
                { city: 'Thanh Hóa', gold: '1', silver: '2', bronze: '5', total: '10' },
                { city: 'Cần Thơ', gold: '1', silver: '2', bronze: '5', total: '10' },
                { city: 'Bình Dương', gold: '1', silver: '2', bronze: '5', total: '10' },
                { city: 'Long An', gold: '1', silver: '2', bronze: '5', total: '10' },
                { city: 'Đồng Tháp', gold: '1', silver: '2', bronze: '5', total: '10' },
                { city: 'Phú Thọ', gold: '1', silver: '2', bronze: '5', total: '10' },
                { city: 'Đà Nẵng', gold: '1', silver: '2', bronze: '5', total: '10' },
                { city: 'Nghệ An', gold: '1', silver: '2', bronze: '5', total: '10' },
            ]
        }
    }

    columns = [
        {
            title: <b>Đơn vị</b>,
            dataIndex: 'city',
            key: 'city',
            width: '30%'
        },
        {
            title: <b>V</b>,
            dataIndex: 'gold',
            key: 'gold',
            width: '15%'
        },
        {
            title: <b>B</b>,
            dataIndex: 'silver',
            key: 'silver',
            width: '15%'
        },
        {
            title: <b>Đ</b>,
            dataIndex: 'bronze',
            key: 'bronze',
            width: '15%'
        },
        {
            title: <b>Tổng</b>,
            dataIndex: 'total',
            key: 'total',
            width: '25%'
        },
    ];

    componentDidMount() {
        this.props.fetchTaskRequest();
    }

    render() {
        const { results } = this.props
        console.log('results',results)
        return (
            <div>
                <Table bordered columns={this.columns} dataSource={this.state.results} />
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

export default connect(mapStateToProps, mapDispatchToProps)(DashboardResults);