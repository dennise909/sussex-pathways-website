"use client";
import { Row, Col } from "antd";

const contentStyle: React.CSSProperties = {
  height: "330px",
  width: "538px",
  backgroundColor: "#f2f2f2",
  display: "inline-block",
  padding: "15px",
  margin: "30px 10px",
  textAlign: "center",
};

export const VideoBanner = () => (
  <div>
    <Row align="middle" justify={"center"}>
      <Col>
        <div style={contentStyle}></div>
        <div style={contentStyle}>
          <h2
            style={{
              font: "bold helvetica, arial, sans-serif",
              color: "black",
            }}
          >
            Support Change for the better
          </h2>
          {/* <p>
            Sussex Pathways is a criminal justice charity based in Lewes, East
            Sussex. We work within prisons and communities with the aim of
            reducing offending behaviours and empowering ex-offenders to make
            positive life choices. Our team is comprised of staff, trustees, and
            volunteers. We work with offenders and victims of crime primarily
            within Sussex, but are able to facilitate out of area work when
            capacity allows.
          </p> */}
        </div>
      </Col>
    </Row>
  </div>
);
