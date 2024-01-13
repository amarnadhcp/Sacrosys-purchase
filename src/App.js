import { BrowserRouter, Route,Routes } from "react-router-dom";
import Purchase from "../src/pages/purchaseEntry/PurchaseEntry.jsx"
import Layout from "./pages/Layout.jsx";
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route  path="/" element={ <Layout> </Layout> }>
      <Route path="/purchase" element={<Purchase />} />
      </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
