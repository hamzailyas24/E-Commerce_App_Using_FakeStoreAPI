import AppRouter from "./app-router/AppRouter";
import "./App.css";
import AppNavbar from "./components/AppNavbar";

function App() {
  return (
    <>
      <AppNavbar title="Fake Store" />
      <AppRouter />
    </>
  );
}

export default App;
