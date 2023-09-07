import { Card } from "antd";
import { mock } from "../mock/mock";
import { createCommentTree } from "../utils/createTree";
import { CommentTemplate } from "./commentTemplate";
import Paginations from "./pagination";

function CommentList({ comments }) {
 console.log(comments)
  if (comments.length > 0) {
    return comments.map((comment) => (
      <Comment
        key={comment.id}
        comment={comment}
      />
    ));
  }
 
}

function Comment({ comment }) {
  return (
    <div>
      {
        comment.children && <CommentTemplate commentDataInfo={comment} />
      }
      {
        comment.children && comment.children != false && (
          <Card>
          <CommentList
            comments={comment.children}
          />
        </Card>
        )
      }
    </div>
  );
}


export function CommentPage() {
  const commentDataInfos = createCommentTree(mock)
  console.log(commentDataInfos)
 return (
   <div>
     <div style={{height:"90%"}}>
      <CommentList comments={commentDataInfos} />
     </div>
     <div style={{display:"flex",justifyContent:"end",marginTop:"15px"}}>
       <Paginations tatol= {50} />
     </div>
   </div>
 );
}