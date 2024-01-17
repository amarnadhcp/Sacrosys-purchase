import { BrowserRouter, Route,Routes,Switch  } from "react-router-dom";
import Purchase from "../src/pages/purchaseEntry/PurchaseEntry.jsx"
import Layout from "./pages/Layout.jsx";
import SupplierList from "./pages/purchaseEntry/SupplierList.jsx";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route  path="/" element={ <Layout> </Layout> }>
      <Route path="/purchase" element={<Purchase />} />
      <Route path="/supplier" element={<SupplierList />} />
      </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
