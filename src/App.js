import "@fontsource/roboto";
import "@fontsource/roboto/500.css";
import "./App.scss";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main/Main";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <Main />
    </div>
  );
};

export default App;
