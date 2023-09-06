import { CommentTemplate } from "./commentTemplate";

export function CommentPage() {
  const icon = "../../favicon.ico"
  const eyeOutlined = 140;
  const commentNumber = 6;
  const likeNumber = 6;
  const description = {name : "Lucas", content : "Lucas Hell" };
  return <div>
    <CommentTemplate icon={icon} eyeOutlined={eyeOutlined} commentNumber={commentNumber} likeNumber={likeNumber} description={ description} />
  </div>;
}