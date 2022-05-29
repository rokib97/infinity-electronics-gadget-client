import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import AddItem from "./Pages/AddItem/AddItem";
import Login from "./Pages/Auth/Login/Login";
import Register from "./Pages/Auth/Register/Register";
import RequireAuth from "./Pages/Auth/RequireAuth/RequireAuth";
import Home from "./Pages/Home/Home/Home";
import ManageInventories from "./Pages/Manage Inventories/ManageInventories";
import MyItem from "./Pages/MyItem/MyItem";
import NotFound from "./Pages/NotFound/NotFound";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";

function App() {
  return (
    <div>
      <Header />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route
          path="/addItem"
          element={
            <RequireAuth>
              <AddItem />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/manageInventory"
          element={
            <RequireAuth>
              <ManageInventories />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/product/:productId"
          element={
            <RequireAuth>
              <ProductDetails />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/items"
          element={
            <RequireAuth>
              <MyItem />
            </RequireAuth>
          }
        ></Route>
        <Route path="/*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
