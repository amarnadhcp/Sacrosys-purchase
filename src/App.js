import { BrowserRouter, Route,Routes  } from "react-router-dom";
import PurchaseEntry from "./pages/PurchaseEntry.jsx";
import Layout from "./pages/Layout.jsx";
import PayOutstanding from "./pages/PayOutstanding.jsx";
import ViewReturnList from "./pages/ViewReturnList.jsx";
import ViewVendorList from "./pages/ViewVendorList.jsx";
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route  path="/" element={ <Layout> </Layout> }>
      <Route path="/purchase" element={<PurchaseEntry />} />
      <Route path="/supplier" element={<ViewVendorList />} />
      <Route path="/return" element={<ViewReturnList />} />
      <Route path="/outstanding" element={<PayOutstanding />} />
      </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
