import { Button, Input, Space } from "antd";
import { SearchOutlined } from '@ant-design/icons';
import '../styles/style.css';
const {Search} = Input
export function SearchBar(props) {
  const {handleSearch} = props
  return (
    <Search
        style={{
          width:"40%"
      }}
      placeholder="请输入"
      enterButton="搜索"
      onSearch={handleSearch}
      prefix={<SearchOutlined />}
    />
  );
}
