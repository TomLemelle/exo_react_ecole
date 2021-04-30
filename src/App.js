import Chronometer from "./components/Chronometer";
import Gallery from "./components/Gallery";
import Metronome from "./components/Metronome";
import "./styles/app.css";

function App() {
  return (
    <div className="App">
      <Metronome />
      <hr />
      <Gallery />
      <hr />
      <Chronometer />
      <hr />
    </div>
  );
}

export default App;
