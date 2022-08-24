import "@fontsource/roboto";
import "@fontsource/roboto/500.css";
import "./App.scss";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main/Main";
import NavState from "./components/Main/Menu/context/navState";

const App = () => {
  return (
    <div className="App">
      <NavState>
        <Header />
        <Sidebar />
        <Main />
      </NavState>
    </div>
  );
};

export default App;
