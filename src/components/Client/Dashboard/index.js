import React from 'react'
import { Icon } from "antd";
import "./styles.css";

import { connect } from 'react-redux';  //connect toi store
import { fetchTaskRequest } from '../../../actions/index';
import styles from './styles';
import ContentTittle from '../../TemplateComponents/ContentTittle/index';

const contentDetailArray = [
    { content: 'TP Hồ Chí Minh vững vàng ngôi đầu tại Hội khỏe Phù Đổng toàn quốc', updateAt: 'Ngày 11 tháng 08 năm 2020' },
    { content: 'Nghệ An vô địch bóng chuyền nam, nữ tại HKPĐ toàn quốc ', updateAt: 'Ngày 11 tháng 08 năm 2020' },
    { content: 'Khai mạc môn thi đấu cuối cùng tại HKPĐ toàn quốc', updateAt: 'Ngày 11 tháng 08 năm 2020' },
    { content: 'Khai mạc môn Cờ vua tại HKPĐ toàn quốc ', updateAt: 'Ngày 11 tháng 08 năm 2020' },
    { content: 'TP. Hồ Chí Minh tiếp tục dẫn đầu tại Hội khỏe Phù Đổng toàn quốc', updateAt: 'Ngày 11 tháng 08 năm 2020' },
    { content: 'TP Hồ Chí Minh vững vàng ngôi đầu tại Hội khỏe Phù Đổng toàn quốc', updateAt: 'Ngày 11 tháng 08 năm 2020' },
    { content: 'Nghệ An vô địch bóng chuyền nam, nữ tại HKPĐ toàn quốc ', updateAt: 'Ngày 11 tháng 08 năm 2020' },
    { content: 'Khai mạc môn thi đấu cuối cùng tại HKPĐ toàn quốc', updateAt: 'Ngày 11 tháng 08 năm 2020' },
    { content: 'Khai mạc môn Cờ vua tại HKPĐ toàn quốc ', updateAt: 'Ngày 11 tháng 08 năm 2020' },
    { content: 'TP. Hồ Chí Minh tiếp tục dẫn đầu tại Hội khỏe Phù Đổng toàn quốc', updateAt: 'Ngày 11 tháng 08 năm 2020' },
]

const contentDetails = contentDetailArray.map((x, index) =>
    <div key={index} className="body-content-row">
        <Icon style={{ color: '#F38032' }} type="caret-right" />
        <a>{x.content}</a>
        <span className="updateTitle">Ngày đăng: <span className="updateAt">{x.updateAt}</span></span>
    </div>
)

const leftContentArray = [
    { tittle: 'Tin mới nhất', url: 'https://gifimage.net/wp-content/uploads/2017/10/new-animated-gif-12.gif' },
    { tittle: 'Tin tức - Sự kiện', url: 'https://gifimage.net/wp-content/uploads/2017/10/new-animated-gif-12.gif' },
    { tittle: 'Văn bản hướng dẫn', url: 'https://gifimage.net/wp-content/uploads/2017/10/new-animated-gif-12.gif' },
]

const leftContents = leftContentArray.map((x, index) =>
    <div key={index} className="left-content">
        <div className="header-content">
            {x.tittle}
        </div>
        <div className="CardVideo">
            <div className="main-content">
                <div className="main-content1">
                    <div>
                        <img src={x.url} width="135px" height="100px"></img>
                    </div>
                    <div className="firstContent">
                        <a>TP Hồ Chí Minh vững vàng ngôi đầu tại Hội khỏe Phù Đổng toàn quốc</a>
                        <span className="updateTitle">Ngày đăng: <span className="updateAt">Ngày 11 tháng 08 năm 2020</span></span>
                    </div>
                </div>
                <div className="body-content">
                    {contentDetails}
                </div>
            </div>
            <div className="footer-content">
                <a>Xem thêm</a>
            </div>
        </div>
    </div>
)

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
                < ContentTittle />
                {leftContents}
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