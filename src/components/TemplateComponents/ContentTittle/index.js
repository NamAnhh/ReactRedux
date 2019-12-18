
import React from 'react';

import { Icon } from "antd";
import styles from './styles';
import './styles.css';

export default class ContentTittle extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={styles.contentTittle}>
                <Icon style={styles.iconMargin} type="home" />
                <a href="/"> Trang chủ </a>
            </div>
        )
    }
}