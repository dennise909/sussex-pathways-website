"use client";
import { Row, Col } from "antd";

const contentStyle: React.CSSProperties = {
  height: "200px",
  width: "300px",
  backgroundColor: "#f2f2f2",
  display: "inline-block",
  padding: "15px",
  margin: "30px 10px",
  textAlign: "center",
};

const spanStyle: React.CSSProperties = {
  position: "absolute",
  lineHeight: "25px",
  font: "bold 60pt helvetica, arial, sans-serif",
  color: "#EC6540",
};
export const HomeBanner = () => (
  <div>
    <Row align="middle" justify={"center"}>
      <Col>
        <div style={contentStyle}>
          <span style={spanStyle}>5</span>
        </div>
        <div style={contentStyle}>
          <span style={spanStyle}>345</span>
        </div>
        <div style={contentStyle}>
          <span style={spanStyle}>7</span>
        </div>
      </Col>
    </Row>
  </div>
);
