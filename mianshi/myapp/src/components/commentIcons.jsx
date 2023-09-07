export function CommentIcons(props) {
  const { icon } = props;
  return (
    <div
      style={{
        display: "flex",
        width: "50px",
        height: "50px",
        border: "1px solid transparent ",
        borderRadius:"50%",
        background:`url(${icon})`,
        backgroundRepeat:"no-repeat",
        backgroundPosition:"center"
      }}
    >
      {/* <img src={icon} alt="" /> */}
    </div>
  );
}
