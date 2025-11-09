import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home.jsx";
import SignIn from "../pages/signIn/SignIn.jsx";
import WaitingList from "../pages/waitingList/WaitingList.jsx";
import ScrollToTop from "../components/scrollToTop/ScrollToTop.jsx";
import Layout from "./Layout.jsx";
import Dashboard from "../pages/dashboard/Dashboard.jsx";
import SignUp from "../pages/signUp/SignUp.jsx";
import Products from "../pages/products/Products.jsx";
import Documents from "../pages/documents/Documents.jsx";
import Payments from "../pages/payments/Payments.jsx";
import EditProduct from "../pages/products/EditProduct.jsx";

function AppRoutes() {
    return(
        <BrowserRouter>
            <ScrollToTop /> {/* Reset scroll position to Top of the page  */}
            <Routes>

                <Route path="/" element={<Home/>} />
                <Route path="/waitinglist" element={<WaitingList/>} />
                <Route path="/signin" element={<SignIn/>} />
                <Route path="/signup" element={<SignUp/>} />
                <Route path="/documents" element={<Documents/>} />

                <Route path="/" element={<Layout/>}>
                    <Route path="/dashboard" element={<Dashboard/>} />
                    <Route path="/products" element={<Products/>} />
                    <Route path="/payments" element={<Payments/>} />
                    <Route path="/editproduct" element={<EditProduct/>} />
                </Route>

            </Routes>
        </BrowserRouter>
    )
};

export default AppRoutes