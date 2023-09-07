import React, { useState } from "react";
import { RightOutlined, LeftOutlined } from "@ant-design/icons";
import { Pagination } from "antd";

const  paginationIcon = {
  display: "inline-block",
  width: "30px",
  height: "30px",
  border: "1px solid rgba(0, 0, 0, 0.25)",
  textAlign: "center",
  borderRadius: "3px",
  verticalAlign: "middle", /* 垂直居中对齐 */
}
const paginationPage = {
  display: "inline-block",
  width: "30px",
  height: "30px",
  border: "1px solid rgba(0, 0, 0, 0.25)",
  textAlign: "center",
  borderRadius: "3px",
  verticalAlign: "middle", /* 垂直居中对齐 */
}
const Paginations = (props) => {
  const { total } = props;
  const handlePrevClick = () => {
    console.log("点击了上一页");
    // 添加上一页的逻辑处理
  };

  const handleNextClick = () => {
    console.log("点击了下一页");
    // 添加下一页的逻辑处理
  };

  const itemRender = (current, type, originalElement) => {
    if (type === "prev") {
      return (
        <div
          style={paginationIcon}
        >
          <LeftOutlined />
        </div>
      );
    }
    if (type === "next") {
      return (
        <div
          style={paginationIcon}
        >
          <RightOutlined />
        </div>
      );
    }
    if (type === "page") {
      return (
        <div
          style={paginationPage}
        >
          <span>{current}</span>
        </div>
      );
    }
    return originalElement;
  };

  return (
    <div>
      {/* 自定义上一页按钮 */}
      <Pagination
        total={total}
        itemRender={itemRender}
        onPrev={handlePrevClick}
      />

      {/* 自定义下一页按钮 */}
    </div>
  );
};
export default Paginations;
