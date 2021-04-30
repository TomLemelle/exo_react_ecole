import Chronometer from "./components/Chronometer";
import Gallery from "./components/Gallery";
import Metronome from "./components/Metronome";
import TodoListApp from "./components/TodoListApp";
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
      <TodoListApp />
    </div>
  );
}

export default App;
