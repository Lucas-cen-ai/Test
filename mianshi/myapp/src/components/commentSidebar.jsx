export function CommentSidebar(props) {
  const { description } = props;
  return (
    <div>
      <div>
        <div>{description.name}</div>
        <div>{description.comment}</div>
      </div>
      <div></div>
    </div>
  );
}