import { Space } from "antd";
import "./App.css";
import AppHeader from "./components/AppHeader";
import AppFooter from "./components/AppFooter";
import SideMenu from "./components/SideMenu";
import PageContent from "./components/PageContent";

function App() {
  return (
    <div className="App">
      <AppHeader />
      <Space className="SideMenuAndPageContent">
        <SideMenu></SideMenu>
        <PageContent></PageContent>
      </Space>
      <AppFooter />
    </div>
  );
}

export default App;
