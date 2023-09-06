import { Button } from "antd";
import { NewsetTitile } from "./newestTitle";
import { ClassifyButton } from "./classifyButton";
import { NewestFooter } from "./newestFooter";
export function NewestPage() {
  const title = "最新";
  const questionStatus = "未回答";
  const grade = "admin";
  const classifys = [
    {
      name: "数据",
    },
    {
      name: "功能",
    },
  ];
  const eyeOutlined = 140;
  const commentNumber = 6;
  return (
    <div>
      <NewsetTitile title={title} questionStatus={questionStatus} />
      <Button>{grade}</Button>
      <ClassifyButton classifys={classifys} />
      <NewestFooter eyeOutlined={eyeOutlined} commentNumber={ commentNumber} />
    </div>
  );
}
