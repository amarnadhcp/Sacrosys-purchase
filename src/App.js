import { BrowserRouter, Route,Routes  } from "react-router-dom";
import Purchase from "../src/pages/purchaseEntry/PurchaseEntry.jsx"
import Layout from "./pages/Layout.jsx";
import SupplierList from "./pages/purchaseEntry/SupplierList.jsx";
import ReturnList from "./component/Entry/ReturnList.jsx";
import OutstandinTable from "./component/Outstanding/OutstandinTable.jsx";
import PayOutstanding from "./pages/PayOutstanding.jsx";
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route  path="/" element={ <Layout> </Layout> }>
      <Route path="/purchase" element={<Purchase />} />
      <Route path="/supplier" element={<SupplierList />} />
      <Route path="/return" element={<ReturnList />} />
      <Route path="/outstanding" element={<PayOutstanding />} />
      </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
