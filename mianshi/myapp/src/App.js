import logo from "./logo.svg";
import { Button, Input, Select, Space, Card } from "antd";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CommentPage } from "./components/comment";
import { NewestPage } from "./components/newest";

import { SearchBar } from "./components/search";
import ButtonComponent from "./components/configPage";
import { Routers } from "./components/routers";

function App() {
  function handleSearch() {
    console.log("search");
  }
  return (
    <div className="App">
      <Card>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "15px",
          }}
        >
          <SearchBar handleSearch={handleSearch} />
          <Button type="primary">我要提问</Button>
        </div>
        <div>
          <ButtonComponent />
        </div>
      </Card>
    </div>
  );
}

export default App;
