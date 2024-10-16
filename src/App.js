import "./App.css";
import ContentComponent from "./component/ContentComponent";
import { ThemeProvider } from "./context/ThemeProvider";

function App() {
  return (
    <ThemeProvider>
      <ContentComponent></ContentComponent>
    </ThemeProvider>
  );
}

export default App;
