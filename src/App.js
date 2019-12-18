import React from 'react';
import './App.css';
import Routerlinkk from './RouterLink/index';
import Header from '../src/components/Client/Header/index';
import Footer from '../src/components/Client/Footer/index';
import DashboardResults from '../src/components/Client/DashboardResults/index';
import Iframe from 'react-iframe'

import { Row, Col, Button, Icon } from "antd";

const resultArray = [
  { id: '1', title: 'Kết quả thi toàn quốc' },
  { id: '2', title: 'Kết quả khu vực 1 - Phú Thọ' },
  { id: '3', title: 'Kết quả khu vực 2 - Nam Định' },
  { id: '4', title: 'Kết quả khu vực 3 - Thanh Hóa' },
  { id: '5', title: 'Kết quả khu vực 4 - Bình Dương' },
  { id: '5', title: 'Kết quả khu vực 5 - Cần Thơ' }
]

const results = resultArray.map((x,index) =>
  <div key={index} className="card">
    <div className="header-card">
      {x.title}
    </div>
    <div className="mini-table">
      <DashboardResults />
    </div>
    <div className="footer-card">
      <Button type="link" >Chi tiết</Button>
    </div>
  </div>
)

const footerContentArray = [
  { content: 'Lễ khai mạc HỘI KHỎE PHÙ ĐỔNG lần thứ 9 tại BRVT' },
  { content: 'Video Hội khỏe phù đổng lần thứ 9 năm 2020 ' },
]

const footerContents = footerContentArray.map((x,index) =>
  <div key={index} className="footer-content">
    <Icon type="caret-right" style={{ color: '#F38032' }} /><a >{x.content} </a>
  </div>
)

function App() {
  return (
    (
      <div>
        {/* header giữ nguyên */}
        <Header />
        <div className="dashboard">
          {/* screen to */}
          <div className="main-dashboard">
            {/* màn hình sẽ thay đổi ở đây */}
            <Row>
              <Col span={16} style={{paddingRight:'18px'}}>
                  <Routerlinkk />
              </Col>
              <Col span={8}>
                {results}
                <hr style={{ color: '#0066A5' }} />
                <div className="cardFotter">
                  <div className="header-card">
                    Video
                    </div>
                  <div className="CardVideo">
                    <p className="pCardVideo">Lễ khai mạc HỘI KHỎE PHÙ ĐỔNG lần thứ 9 tại BRVT</p>
                  </div>
                  <div style={{ margin: '0 5px' }}>
                    <Iframe url="http://www.youtube.com/embed/xDMP3i36naA"
                      width="314px"
                      height="150px"
                      id="myId"
                      className="myClassname"
                      display="initial"
                      position="relative" />
                  </div>
                  <div>
                    {footerContents}
                  </div>
                </div>
              </Col>
            </Row>
          </div>
          {/* end screen to */}

          {/* screen nho */}
          <div className="main-dashboard-small-screen">
            {/* màn hình sẽ thay đổi ở đây */}
            <Row>
              <Routerlinkk />
            </Row>
          </div>
          {/* end screen nho */}

        </div>
        {/* footer giữ nguyên */}
        <Footer />
      </div>
    )
  );
}

export default App;
