import { Button } from "antd";
import { MessageOutlined } from '@ant-design/icons';
export function ClassifyButton(props) {
  const { classifys } = props;
  return (
    <div style={{ display: "flex", justifyContent: "space-between", margin: "15px 15px 0 0" }}>
       <div>
      {
        classifys.map((classify, index) => {
          return (
            <Button style={{marginRight: "5px"}}>{ classify.name}</Button>
          )
        })
      }
      </div>
      <Button icon={<MessageOutlined />}>评论</Button>
    </div>
   
  )
}