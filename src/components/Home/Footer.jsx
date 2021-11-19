import React from "react";
import "antd/dist/antd.css";
import {Row, Col} from 'antd';
import {PhoneOutlined, CommentOutlined, EnvironmentOutlined, MailOutlined} from '@ant-design/icons';

export default function Footer() {
  return (
      <div className="homeFooter">
        <div className="footer">
          <div className="footer_column">
            <Row className="footer_title">让我们一起期待冬奥会，一起为运动健儿加油</Row>
            <Row>
              <Col span={5} offset={3} className="footer_li">
                <Row className="list_title">开发人员</Row>
                <Row>通信192张书珂</Row>
                <Row>数据193王桃峰</Row>
                <Row>数据192赵子莹</Row>
                <Row>计科192许明喜</Row>
              </Col>
              <Col span={12} className="footer_li">
                <Row className="list_title">联系我们</Row>
                <Row><PhoneOutlined className="footer_icon"/>电话: 15188561338</Row>
                <Row><MailOutlined className="footer_icon"/>邮箱: xmx15188561338@163.com</Row>
                <Row><CommentOutlined className="footer_icon"/>微信: xmx15188561338</Row>
                <Row><EnvironmentOutlined className="footer_icon"/>地址: 新乡市华兰大道东段河南科技学院</Row>
              </Col>
            </Row>
          </div>
          <div className="footer_column">
            <img src={"/img/bing.png"} alt="" className="footer_bing"/>
            <img src={"/img/xue.png"} alt="" className="footer_xue"/>
          </div>
        </div>
        <div className="footer_p">
          <p>用火炬点亮冬奥会的光芒，用拼搏写下冬奥赛场的辉煌，用黄皮肤凝聚全世界的目光，用中国红引领五大洲的方向
          </p>
          <p>祝福祖国，祝福中华健儿，冬奥会梦想成真!</p>
        </div>
      </div>

  );
}
