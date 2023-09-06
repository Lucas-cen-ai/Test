import { Button } from "antd";
import "../styles/newest.css";
function selectColor(state) {
  const states = {
    未回答: "unanswered",
    已回答: "respondent",
  };
  return states[state];
}
export function NewsetTitile(props) {
  const { title, questionStatus, grade } = props;
  const state = ["未回答", "已回答"];

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "15px 15px 0 15px",
          alignItems: "center",
        }}
      >
        <h3>{title}</h3>
        <Button className={selectColor(questionStatus)}>
          {questionStatus}
        </Button>
      </div>
    </div>
  );
}
