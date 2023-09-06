import React, { useState,useEffect } from 'react';
import { Button } from 'antd';
import "../styles/style.css"
import { Routers } from './routers';
function ButtonComponent() {
  const [onLink,setOnLink] = useState("comment")
  const handleButtonClick = (path) => {
    window.location.hash = `/${path}`
    setOnLink(path)
  };

  useEffect(() => {
    const hash = window.location.hash;
    const path = hash.split("/")
    setOnLink(path[path.length - 1])
  }, [window.location.hash])
  return (
    <div>
      <div>
      <Button type='link' className={onLink === "comment" ? "on-link" : "init-link" } onClick={() => handleButtonClick('comment')}>论坛</Button>/
      <Button type='link' className={onLink === "newest" ? "on-link" : "init-link"} onClick={() => handleButtonClick('newest')}>最新</Button>
      </div>
      <div style={{
        margin: "15px"
      }}>
        <Routers selectPage={onLink} />
      </div>
    </div>
  );
}

export default ButtonComponent;