import { CommentFooter } from "./commentFooter";
import { CommentIcons } from "./commentIcons";
import { CommentSidebar } from "./commentSidebar";

export function CommentTemplate(props) {
  const { icon , eyeOutlined, commentNumber, likeNumber,description} = props;
  return <div style={{display:"flex",height: "200px"}}>
    <div style={{display:"flex",height:200}}>
      <CommentIcons icon={icon} />
    </div>
    <div style={{marginLeft : "15px"}}>
    <CommentSidebar description={description} />
   <CommentFooter eyeOutlined={eyeOutlined } commentNumber={commentNumber} likeNumber={likeNumber}/>
    
    </div>
    
  </div>
}