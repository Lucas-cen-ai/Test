import { Button } from "antd";
import { StarOutlined ,EyeOutlined,MessageOutlined} from '@ant-design/icons';
export function NewestFooter(props) {
  const { eyeOutlined, commentNumber } = props;
  const publicClass = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color : "black",
  }
  return (
    <div style={{display:"flex",alignItems:"center",marginTop:"15px"}}>
      <Button type="link" style={{ ...publicClass,padding : "4px 15px 4px 0" ,marginRight:"5px"}}  icon={<StarOutlined />}><div>收藏</div></Button>
      |<Button type="link" style={publicClass} icon={<EyeOutlined />}> <div>{eyeOutlined}</div> </Button>
      |<Button type="link" style={publicClass} icon={<MessageOutlined />} ><div>{ commentNumber}</div></Button>
    </div>
  )
}