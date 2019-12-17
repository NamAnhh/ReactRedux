import React from 'react';
import './styles.css';
import styles from './styles';

import { Menu, Dropdown, Button } from 'antd';

const menu = (
    <Menu>
        <Menu.Item>
            <a className="abc" style={styles.menuA} target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
                Khu vực thi Toàn quốc
        </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
                Xếp hạng các đoàn theo điểm
        </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
                Tổng hợp kết quả theo môn thi
        </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
                Tổng hợp điểm toàn quốc
        </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
                Tổng hợp huy chương toàn quốc
        </a>
        </Menu.Item>
    </Menu>
);

export default class Header extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="header" />
                <div className="navbar">
                    <div className="main-navbar">
                        <Button style={styles.btn}>TRANG CHỦ</Button>
                        <Button style={styles.btn} >Giới thiệu</Button>
                        <Button style={styles.btn}>Văn bản hướng dẫn</Button>
                        <Dropdown overlay={menu} placement="bottomLeft">
                            <Button style={styles.btn} >KẾT QUẢ</Button>
                        </Dropdown>
                        <Button style={styles.btn} >ĐĂNG KÝ TRỰC TUYẾN</Button>
                        <Button style={styles.btn} >LIÊN HỆ</Button>
                    </div>
                </div>
            </div>
        )
    }
}