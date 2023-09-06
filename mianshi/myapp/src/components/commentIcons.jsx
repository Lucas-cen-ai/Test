export function CommentIcons(props) {
  const { icon } = props;
  return <div style={{display:"flex",width:"80px",height:"80px"}}>
    <img src={icon} alt="" />
  </div>
}