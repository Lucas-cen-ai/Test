import React from "react";
import { Button } from "antd";
import {
  StarOutlined,
  LikeOutlined,
  EyeOutlined,
  MessageOutlined,
} from "@ant-design/icons";

export function CommentFooter(props) {
  const { eyeOutlined, commentNumber, likeNumber } = props;
  const publicClass = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "black",
  };
  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", marginTop: "15px" }}>
        <Button
          type="link"
          style={{
            ...publicClass,
            padding: "4px 15px 4px 0",
            marginRight: "5px",
          }}
          icon={<LikeOutlined />}
        >
          <div>{likeNumber}</div>
        </Button>
        |
        <Button type="link" style={publicClass} icon={<StarOutlined />}>
          <div>{eyeOutlined}</div>
        </Button>
        |
        <Button type="link" style={publicClass} icon={<MessageOutlined />}>
          <div>{commentNumber}</div>
        </Button>
      </div>
    </div>
  );
}
