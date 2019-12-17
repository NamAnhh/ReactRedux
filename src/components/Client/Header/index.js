import React from 'react';
import './styles.css';
import styles from './styles';

import { Menu, Dropdown, Button, Row, Collapse, } from 'antd';

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
    render() {
        return (
            <div className="container">
                <div className="header" />
                {/* screen lon */}
                <div className="navbar">
                    <Row style={styles.mainNavbar}>
                        <Button style={styles.btn}>TRANG CHỦ</Button>
                        <Button style={styles.btn} >Giới thiệu</Button>
                        <Button style={styles.btn}>Văn bản hướng dẫn</Button>
                        <Dropdown overlay={menu} placement="bottomLeft">
                            <Button style={styles.btn} >KẾT QUẢ</Button>
                        </Dropdown>
                        <Button style={styles.btn} >ĐĂNG KÝ TRỰC TUYẾN</Button>
                        <Button style={styles.btn} >LIÊN HỆ</Button>
                    </Row>
                </div>
                {/* end screen lon */}

                {/* screen nho */}
                <Collapse className="navbar-smallScreen" style={{color:'#336699'}} defaultActiveKey={['1']}>
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
                        <iframe src="http://free.timeanddate.com/clock/i53ik6xa/n95/tlvn42/fs17/tct/pct" frameborder="0" width="94" height="22" allowtransparency="true"></iframe>
                    </Row>
                </div>
            </div>
        )
    }
}

export default Header