import React from "react";
import { Button } from "antd";
import {
  StarOutlined,
  LikeOutlined,
  EyeOutlined,
  MessageOutlined,
  EditOutlined,
} from "@ant-design/icons";

export function CommentFooter(props) {
  const { likedCount, repliedCount, collectedFlag, collectedCount, likedFlag } =
    props;
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
          <div>{likedCount}</div>
        </Button>
        |
        <Button type="link" style={publicClass} icon={<StarOutlined />}>
          <div>{repliedCount}</div>
        </Button>
        |
        <Button type="link" style={publicClass} icon={<MessageOutlined />}>
          <div>{collectedCount}</div>
        </Button>
        |
        <Button type="link" style={publicClass} icon={<EditOutlined />}>
          <div>回复评论</div>
        </Button>
      </div>
    </div>
  );
}
