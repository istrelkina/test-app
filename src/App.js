import "@fontsource/roboto";
import "@fontsource/roboto/500.css";
import "./App.scss";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Sidebar />
    </div>
  );
};

export default App;
