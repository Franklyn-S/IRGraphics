import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import Footer from "components/Footer";
import Main from "components/Main";
import Header from "./components/Header";

function App() {
  const history = createBrowserHistory();
  return (
    <BrowserRouter location={history.location} navigator={history}>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route
          path="/authors"
          element={<div style={{ minHeight: "100vh" }} />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
