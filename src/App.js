import GameDetails from "./components/GameDetails";
import Navbar from "./components/Navbar";
import SecondSection from "./components/SecondSection";
import VideoPlayer from "./components/VideoPlayer.js";
import "./index.css";

function App() {
  return (
    <>
      <Navbar />
      <div
        class="alert alert-danger alert-dismissible fade show d-none"
        role="alert"
        id="alert"
      >
        <strong>ALERT!</strong> Session Time Out
      </div>
      <div className="container d-flex">
        <GameDetails />
        <div className="border m-5"></div>
        <VideoPlayer />
      </div>
      <div className="border m-4">
        <SecondSection />
      </div>
    </>
  );
}

export default App;
