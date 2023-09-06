export function CommentSidebar(props) {
  const { description } = props;
  return <div>
    <div>
    <div>{description.name}</div>
    <div>{description.content}</div>
    </div>
    <div>
    </div>
    
  </div>
}