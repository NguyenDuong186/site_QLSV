import "./App.css";
import { ConfigProvider } from "antd";
import viVN from "antd/es/locale/vi_VN";
import AppLayout from "./components/AppLayout";

function App() {
  return (
    <ConfigProvider locale={viVN}>
      <div className="App">
        <AppLayout />
      </div>
    </ConfigProvider>
  );
}

export default App;
