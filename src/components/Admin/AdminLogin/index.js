import React from 'react'
import { Icon, Input, Row, Col, Button } from "antd";
import "./styles.css";

import { connect } from 'react-redux';  //connect toi store
import { fetchTaskRequest } from '../../../actions/index';

const contentMenuArray = [
    {
        content: 'Quy trình đăng ký',
        url: ''
    },
    {
        content: 'Thời hạn đăng ký',
        url: ''
    },
    {
        content: 'Hướng dẫn quản trị cấp tỉnh',
        url: '',
        submenus: [
            {
                content: 'Đăng ký sơ bộ',
                url: ''
            },
            {
                content: 'Đăng ký chi tiết',
                url: ''
            },
            {
                content: 'Báo cáo',
                url: ''
            },
            {
                content: 'Cập nhật hồ sơ đã ký và đóng dấu',
                url: ''
            }
        ]
    },
    {
        content: 'Hướng dẫn quản trị cấp tỉnh',
        url: '',
        submenus: [
            {
                content: 'Đăng ký sơ bộ',
                url: ''
            },
            {
                content: 'Đăng ký chi tiết',
                url: ''
            },
            {
                content: 'Báo cáo',
                url: ''
            },
            {
                content: 'Cập nhật hồ sơ đã ký và đóng dấu',
                url: ''
            }
        ]
    },
]

const contentMenus = contentMenuArray.map((x, index) =>
    <div className="adminlogin-guide-content">
        <div>
            <span>{index + 1}. {x.content}<a href={x.url}> (Tải file đính kèm)</a></span>
        </div>
        {x.submenus && <div className="adminlogin-guide-subcContent">
            {x.submenus.map((x, index) =>
                <span>{index + 1}. {x.content}<a href={x.url}> (Tải file đính kèm)</a></span>
            )}
        </div>}
    </div>
)

class AdminLogin extends React.Component {
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
            <div className="containerLoginAdmin">
                <div className="adminlogin-mainContent">
                    <div className="header-adminlogin">
                        <strong >Bộ giáo dục và đào tạo</strong>
                        <strong >HỘI THỂ THAO HỌC SINH VIỆT NAM</strong>
                        <strong >HỘI KHỎE PHÙ ĐỔNG TOÀN QUỐC LẦN THỨ IX - NĂM 2020</strong>
                    </div>
                    <div className="adminlogin-title">
                        <strong style={{ fontSize: '24px' }}>HỆ THỐNG</strong>
                        <strong style={{ marginTop: '5px' }} >ĐĂNG KÝ THÔNG TIN TRỰC TUYẾN</strong>
                    </div>
                    <div className="adminlogin-content">
                        <div className="adminlogin-guide">
                            <div className="adminlogin-titlegGuide">
                                <span>Hướng dẫn xử lý lỗi không xuất được dạng PDF khi dùng trình duyệt FireFox<a> (Tải file đính kèm)</a></span>
                                <span>Hướng dẫn xử lý lỗi không xuất được dạng PDF khi dùng trình duyệt Chrome<a> (Tải file đính kèm)</a></span>
                            </div>
                            <Row>
                                <Col span={14}>
                                    {contentMenus}
                                </Col>
                                <Col span={10}>
                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', marginTop: '30px' }}>
                                        <div className="adminlogin-footer">
                                            <strong style={{display:'flex',justifyContent:'center',textAlign:'center', color:'#000',marginLeft:'5.5vw'}}>ĐĂNG NHẬP</strong>
                                            <Row className="adminlogin-footerLoginFOrm1">
                                                <Col span={7}>
                                                    <span className="titleAdminLoginForm">Username: </span>
                                                </Col>
                                                <Col span={17}>
                                                    <Input style={{ height: '28px' }} prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                                                </Col>
                                            </Row>
                                            <div className="adminlogin-footerLoginFOrm1">
                                                <Col span={7}>
                                                    <span className="titleAdminLoginForm">Password: </span>
                                                </Col>
                                                <Col span={17}>
                                                    <Input style={{ height: '28px' }} prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Password" />
                                                </Col>
                                            </div>
                                            <div className="adminlogin-footerLoginFOrmBtn">
                                                <Button style={{ width: '14vw', height: '28px' }} type="primary">Login </Button>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(AdminLogin);