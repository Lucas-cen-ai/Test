import { CommentFooter } from "./commentFooter";
import { CommentIcons } from "./commentIcons";
import { CommentSidebar } from "./commentSidebar";

function anyalysisDataInfo(data) {
  let icon,
    repliedCount,
    collectedCount,
    likedCount,
    description,
    likedFlag,
    collectedFlag;
  icon = data["icon"];
  collectedCount = data["collectedCount"];
  repliedCount = data["repliedCount"];
  likedCount = data["likedCount"];
  likedFlag = data["likedFlag"];
  collectedFlag = data["collectedFlag"];
  description = {
    name: data["createUser"],
    comment: data["comment"],
  };
  return {
    icon,
    repliedCount,
    collectedCount,
    likedCount,
    description,
    likedFlag,
    collectedFlag,
  };
}

export function CommentTemplate(props) {
  const { commentDataInfo } = props;
  const {
    icon,
    likedCount,
    repliedCount,
    collectedFlag,
    collectedCount,
    likedFlag,
    description,
  } = anyalysisDataInfo(commentDataInfo);
  return (
    <div style={{ display: "flex", marginBottom:25 }}>
      <div style={{ display: "flex" }}>
        <CommentIcons icon={icon} />
      </div>
      <div style={{ marginLeft: "15px" }}>
        <CommentSidebar description={description} />
        <CommentFooter
          collectedCount={collectedCount}
          repliedCount={repliedCount}
          likedCount={likedCount}
          likedFlag={likedFlag}
          collectedFlag={collectedFlag}
        />
      </div>
    </div>
  );
}
