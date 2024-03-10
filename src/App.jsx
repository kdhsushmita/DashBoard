import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./components/shared/Layout";
import Dashboard from "./components/Dashboard";
import Products from "./components/Products";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />}></Route>
          <Route path="products" element={<Products />}></Route>
        </Route>
        <Route path="login" element={<>this is login</>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
