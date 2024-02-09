import "./App.css";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import IconList from "./components/IconList";
import AppExampleScreen from "./components/AppExampleScreen";
import Impressum from "./components/Impressum";
import MarketingVideo from "./components/MarketingVideo";
import Reviews from "./components/Reviews";

function App() {
  return (
    <div className="App">
      <header className="header">
        <Header></Header>
      </header>
      <LandingPage />
      <Reviews />
      <IconList />
      <h2 id="title">How to setup your Organization</h2>
      <AppExampleScreen />
      <MarketingVideo />
      <Impressum />
    </div>
  );
}

export default App;
