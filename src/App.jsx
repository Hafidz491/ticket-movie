import { Heroes } from "./components/heroes/Heroes";
import { MainSection } from "./components/mainSection/MainSection";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Heroes />
      <MainSection />
    </div>
  );
}

export default App;
