import React from 'react';
import { Button, Typography, Row, Col } from 'antd';
import './zone.css'; // Import the CSS file

const { Title, Paragraph } = Typography;

const foodzone: React.FC = () => {
  return (
    <div className="zone-container">
      {/* First Zone */}
      <Row gutter={16} className="zone-item">
        <Col xs={24} md={12}>
          <img
            src="https://www.smeleader.com/wp-content/uploads/2018/05/%E0%B8%95%E0%B8%A5%E0%B8%B2%E0%B8%94%E0%B9%80%E0%B8%8B%E0%B8%9F%E0%B8%A7%E0%B8%B1%E0%B8%99-%E0%B9%84%E0%B8%99%E0%B8%97%E0%B9%8C%E0%B8%9A%E0%B8%B2%E0%B8%8B%E0%B9%88%E0%B8%B2%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B9%83%E0%B8%AB%E0%B8%8D%E0%B9%88%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%AA%E0%B8%B8%E0%B8%94%E0%B9%83%E0%B8%99%E0%B8%A0%E0%B8%B2%E0%B8%84%E0%B8%AD%E0%B8%B5%E0%B8%AA%E0%B8%B2%E0%B8%99-%E0%B8%97%E0%B8%B3%E0%B9%80%E0%B8%A5%E0%B8%97%E0%B8%AD%E0%B8%87%E0%B8%99%E0%B9%88%E0%B8%B2%E0%B8%88%E0%B8%B1%E0%B8%9A%E0%B8%88%E0%B8%AD%E0%B8%87-3-1.jpg" // แก้ไข URL ของรูป
            alt="First zone"
            className="zone-img"
          />
        </Col>
        <Col xs={24} md={12}>
          <div className="zone-text">
            <Title level={4}>โซนอาหารรายวัน</Title>
            <Paragraph>
              สำหรับลูกค้าที่ต้องการความหลากหลาย หมุนเวียนทุกวัน อยากเดินเล่น หาดูของกินไปด้วยเพลินๆ ชิลๆ แล้วล่ะก็โซนนี้จะตอบโจทย์มาก
              เพราะมีอาหารหลากหลายประเภท จุดเด่นของโซนนี้คือ <strong>มีร้านค้าหมุนเวียนทุกวัน</strong>
            </Paragraph>
            
          </div>
        </Col>
      </Row>

      {/* Second Zone */}
      <Row gutter={16} className="zone-item">
        <Col xs={24} md={12}>
          <img
            src="https://img.wongnai.com/p/1920x0/2023/07/30/030c837f802b4f669c4188f6170287a7.jpg"
            alt="Second zone"
            className="zone-img"
          />
        </Col>
        <Col xs={24} md={12}>
          <div className="zone-text">
            <Title level={4}>โซนอาหารยามเย็น</Title>
            <Paragraph>
              สายชิลต้องไม่พลาดโซนนี้ เพราะบรรยากาศยามเย็นที่เต็มไปด้วยร้านอาหารริมถนน อาหารอร่อยราคาเบาๆ พร้อมเครื่องดื่มเย็นๆ
            </Paragraph>
            
          </div>
        </Col>
      </Row>

      {/* Third Zone */}
      <Row gutter={16} className="zone-item">
        <Col xs={24} md={12}>
          <img
            src="https://www.saphanmai.com/wp-content/uploads/2023/11/DSCF0752.jpg"
            alt="Third zone"
            className="zone-img"
          />
        </Col>
        <Col xs={24} md={12}>
          <div className="zone-text">
            <Title level={4}>โซนตลาดกลางคืน</Title>
            <Paragraph>
              สำหรับผู้ที่ชื่นชอบบรรยากาศตลาดกลางคืน เดินเพลินๆ ซื้อของไปกินไป แนะนำให้มาเที่ยวโซนนี้ จะพบกับร้านค้าหลากหลายและของกินอร่อยๆ
            </Paragraph>
            
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default foodzone;
