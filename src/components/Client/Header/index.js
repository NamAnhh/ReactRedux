import React from 'react';
import './styles.css';
import styles from './styles';

import { Menu, Dropdown, Button, Row, Collapse } from 'antd';
import Iframe from 'react-iframe'
import { withRouter } from "react-router-dom";

const { Panel } = Collapse;

const menu = (
    <Menu>
        <Menu.Item>
            <a className="dropdown-menu-item" rel="noopener noreferrer" href="/intro">
                Khu vực thi Toàn quốc
            </a>
        </Menu.Item>
        <Menu.Item>
            <a className="dropdown-menu-item" rel="noopener noreferrer" href="http://www.taobao.com/">
                Xếp hạng các đoàn theo điểm
        </a>
        </Menu.Item>
        <Menu.Item>
            <a className="dropdown-menu-item" rel="noopener noreferrer" href="http://www.tmall.com/">
                Tổng hợp kết quả theo môn thi
        </a>
        </Menu.Item>
        <Menu.Item>
            <a className="dropdown-menu-item" rel="noopener noreferrer" href="http://www.tmall.com/">
                Tổng hợp điểm toàn quốc
        </a>
        </Menu.Item>
        <Menu.Item>
            <a className="dropdown-menu-item" rel="noopener noreferrer" href="http://www.tmall.com/">
                Tổng hợp huy chương toàn quốc
        </a>
        </Menu.Item>
    </Menu>
);

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        }
    }

    gotoDashboard = () => {
        this.props.history.push("/home");
    }

    gotoAdminLogin = () => {
        this.props.history.push("/adminlogin");
    }

    gotoIntro = () => {
        this.props.history.push("/intro");
    }

    render() {
        return (
            <div className="container">
                <div className="header" />
                {/* screen lon */}
                <div className="navbar">
                    <Row style={styles.mainNavbar}>
                        <Button onClick={this.gotoDashboard} style={styles.btn}>TRANG CHỦ</Button>
                        <Button onClick={this.gotoIntro} style={styles.btn} >Giới thiệu</Button>
                        <Button style={styles.btn}>Văn bản hướng dẫn</Button>
                        <Dropdown overlay={menu} placement="bottomLeft">
                            <Button style={styles.btn} >KẾT QUẢ</Button>
                        </Dropdown>
                        <Button onClick={this.gotoAdminLogin} style={styles.btn} >ĐĂNG KÝ TRỰC TUYẾN</Button>
                        <Button style={styles.btn} >LIÊN HỆ</Button>
                    </Row>
                </div>
                {/* end screen lon */}

                {/* screen nho */}
                <Collapse className="navbar-smallScreen" style={{ color: '#336699' }} defaultActiveKey={['1']}>
                    <Panel style={{ color: '#336699' }} header="Đây là navbar" key="1">
                        <p>TRANG CHỦ</p>
                        <p>GIỚI THIỆU</p>
                        <p>VĂN BẢN HƯỚNG DẪN</p>
                    </Panel>
                </Collapse>
                {/* end screen nho */}
                <div className="datetime">
                    <Row style={styles.mainDatetime} >
                        <h3 className="date">Thứ ba, 17 / 12 / 2019 - </h3>
                        <Iframe url="http://free.timeanddate.com/clock/i53ik6xa/n95/tlvn42/fs17/tct/pct"
                            width="94px"
                            height="22px"
                            id="myId"
                            className="myClassname"
                            frameBorder="0"
                            allowtransparency="true"
                            display="initial"
                            position="relative" />
                    </Row>
                </div>
            </div>
        )
    }
}

export default withRouter(Header)