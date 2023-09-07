import React from "react";
import { Input } from "antd";
export function ContentText(props) {
  const { content } = props;

  const [contentHeight, setContentHeight] = React.useState('');

  const handleContentChange = (e) => {
    setContentHeight(e.target.value);
  };

  const barLength = content.length * 5; // 根据输入内容长度计算杠的长度

  return <div style={{display:"flex",margin:"10px 0",alignItems:"center",width:"80%"}}>
    <div style={{ height: barLength, width: '4px', background: 'gray' ,marginRight:"8px"}}></div>
    <div>
      {content}
    </div> 
  </div>
}
