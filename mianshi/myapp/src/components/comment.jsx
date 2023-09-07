import { mock } from "../mock/mock";
import { createCommentTree } from "../utils/createTree";
import { CommentTemplate } from "./commentTemplate";

function commentList(comment, depth = 0, visitedNodes = new Set()) {
  const commentComponents = [];

  // 检查当前评论节点是否已经被访问过
  if (visitedNodes.has(comment.id)) {
    return commentComponents;
  }

  visitedNodes.add(comment.id);
  const currentComment = <CommentTemplate commentDataInfo={comment} />;

  // 添加缩进样式
  const style = { paddingLeft: depth * 67 + "px" };

  // 遍历子评论
  if (comment.children) {
    comment.children.forEach((child) => {
      const childComponents = commentList(child, depth + 1, visitedNodes);
      commentComponents.push(...childComponents);
    });
  }

  // 组合父评论和所有子评论
  commentComponents.unshift(
    <div key={comment.id} style={style}>
      {currentComment}
    </div>
  );

  // 返回数组
  return commentComponents;
}


export function CommentPage() {
  const description = {name : "Lucas", content : "Lucas Hell" };
  const commentDataInfos = createCommentTree(mock)
 return (
   <div>
     {commentDataInfos.map((commentDataInfo) => {
        return commentList(commentDataInfo);
     })}
    
   </div>
 );
}