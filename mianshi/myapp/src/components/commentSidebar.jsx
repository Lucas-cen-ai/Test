export function CommentSidebar(props) {
  const { description } = props;
  return (
    <div>
      <div>
        <div>{description.name}</div>
        <h3 style={{margin:"5px 0"}}>{description.comment}</h3>
      </div>
      <div></div>
    </div>
  );
}