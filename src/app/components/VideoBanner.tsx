"use client";
import { Row, Col } from "antd";
import BlockContainer from "./common/Container";
import Link from "next/link";
import styled from "@emotion/styled";

const contentStyle: React.CSSProperties = {
  height: "330px",
  width: "538px",
  backgroundColor: "#f2f2f2",
  display: "block",
  float: "left",
  padding: "15px",
  margin: "30px 10px",
  textAlign: "center",
};

export const VideoBanner = () => (
  <BlockContainer
    margin="auto"
    height="440px"
    width="100%"
    variantColor="white"
    borderRadius="12px"
    backgroundSize="100%"
  >
    <Row align="middle" justify={"center"}>
      <Col>
        <BlockContainer
          height="330px"
          width="538px"
          variantColor="#f2f2f2"
          display="block"
          float="left"
          padding="15px"
          margin="30px 100px"
          textAlign="center"
        >
          Hola
        </BlockContainer>
        <div style={contentStyle}>
          <h2
            style={{
              fontFamily: "-apple-system, BlinkMacSystemFont",
              color: "black",
              fontSize: "40px",
            }}
          >
            Supporting Change for the better, from the Inside Out
          </h2>
          <p
            style={{
              fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif",
              color: "black",
              textAlign: "justify",
            }}
          >
            Sussex Pathways is a criminal justice charity based in Lewes, East
            Sussex. We work within prisons and communities with the aim of
            reducing offending behaviours and empowering ex-offenders to make
            positive life choices. Our team is comprised of staff, trustees, and
            volunteers. We work with offenders and victims of crime primarily
            within Sussex, but are able to facilitate out of area work when
            capacity allows.
            {/* <p>
              <Link
                style={{
                  textAlign: "start",
                }}
                href="/"
              >
                Learn more
              </Link>
            </p> */}
          </p>
        </div>
      </Col>
    </Row>
  </BlockContainer>
);
