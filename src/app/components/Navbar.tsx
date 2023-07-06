"use client";
import React, { useState } from "react";
import type { MenuProps } from "antd";
import { Row, Col, Menu, Button, Radio } from "antd";
import { HeartOutlined } from "@ant-design/icons";

const items: MenuProps["items"] = [
  {
    label: "Our work",
    key: "mail",
  },
  {
    label: "Meet the team",
    key: "meet-the-team",
  },
  {
    label: "Get involved",
    key: "get-involved",
  },
  {
    label: "Training",
    key: "training",
  },
  {
    label: "About us",
    key: "about-us",
  },
  {
    label: "Blog",
    key: "blog",
  },
  {
    label: "Contact",
    key: "contact",
  },
];

export const NavBar = () => {
  const sectionStyle = {
    height: "100px",
  };
  const [current, setCurrent] = useState("mail");

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <section>
      <Row style={sectionStyle} justify={"center"} align={"middle"}>
        <Col span={6} push={3}>
          LOGO
        </Col>
        <Col span={12} push={1}>
          <Menu
            onClick={onClick}
            selectedKeys={[current]}
            mode="horizontal"
            items={items}
            style={{ borderBottomStyle: "none" }}
          />
        </Col>
        <Col span={6} push={3}>
          <Button type="primary" size="large" icon={<HeartOutlined />}>
            Donate
          </Button>
        </Col>
      </Row>
    </section>
  );
};
