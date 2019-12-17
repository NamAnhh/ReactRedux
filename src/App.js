import React from 'react';
import './App.css';
import Routerlinkk from './RouterLink/index';
import Header from '../src/components/Client/Header/index';
import Footer from '../src/components/Client/Footer/index';

import { Row, Col } from "antd";

function App() {
  return (
    (
      <div>
        {/* header giữ nguyên */}
        <Header />
        <div className="dashboard">
          <div className="main-dashboard">
            {/* màn hình sẽ thay đổi ở đây */}
            <Row>
              <Col span={16}>
                <div className="dashboard-left">
                  <Routerlinkk />
                </div>
              </Col>
              <Col span={8} className="col-span-8">
                <div className="dashboard-right">
                  col-8
                </div>
              </Col>
            </Row>
          </div>
        </div>
        {/* footer giữ nguyên */}
        <Footer />
      </div>
    )
  );
}

export default App;
