import "@fontsource/roboto";
import "@fontsource/roboto/500.css";
import "./App.scss";
import Header from "./components/js/Header";
import Sidebar from "./components/js/Sidebar";
import Main from "./components/js/Main";

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
