import "@fontsource/roboto";
import "@fontsource/roboto/500.css";
import "./App.scss";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";

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
