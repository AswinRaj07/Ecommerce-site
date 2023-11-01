import "./App.css";
import Home from "./Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserLogin from "./UserLogin";
import RegistrationForm from "./RgistrationForm";
import Header from "./Header";
import BoyFashion from "./BoyFashion";
import BoysDetail from "./BoysDetail";
import AdminLogin from "./AdminLogin";
import AdminPage from "./AdminPage";
import AddProduct from "./AddProduct";
import GirlsFasion from "./GirlsFasion";
import FootWear from "./FootWear";
import Toys from "./Toys";
import Health from "./Health";
import Cart from "./Cart";
import DeliveryAdress from "./DeliveryAdress";
import PaymentPage from "./PaymentPage";
import ViewallProduct from "./ViewallProduct";
import EditProduct from "./EditProduct"
import SelectPayment from "./SelectPayment";
import Cartcomponent from "./Cartcomponent";
import Navebarlogout from "./Navebarlogout";
import { useEffect,useState } from "react";
import Navebar from "./Navebar";
import Footer from "./Footer";
import Vieworders from "./Vieworders";
function App() {
  const [auth,setauth]=useState(0);
  useEffect(()=>{
    if(localStorage.getItem('customerid')!= null){
      setauth(1);
    }
    else{
      setauth(0);
    }
  })
  return (
    <BrowserRouter>
      <div className="App">
         <Navebar auth={auth}/> 
        {/* <Header />
       <Navebarlogout/> */}
        <Routes>
          <Route exact path="/Navebarlogout" element={<Navebarlogout/>}/>
        <Route exact path="/" element={<Home />} />
          <Route exact path="/Home" element={<Home />} />
          <Route exact path="/UserLogin" element={<UserLogin />} />
          <Route
            exact
            path="/RegistrationForm"
            element={<RegistrationForm />}
          />
          <Route exact path="/BoysFashion" element={<BoyFashion />} />
          <Route exact path="/BoysDetail/:id" element={<BoysDetail />} />
          <Route exact path="/GirlsFashion" element={<GirlsFasion />} />
          <Route exact path="/AdminLogin" element={<AdminLogin />} />
          <Route exact path="/AdminPage" element={<AdminPage/>}/>
          <Route exact path="/Viewordes" element={<Vieworders/>}/>
          <Route exact path="/AddProduct" element={<AddProduct />} />
          <Route exact path="/FootWear" element={<FootWear />} />
          <Route exact path="/Toys" element={<Toys />} />
          <Route exact path="/Health" element={<Health />} />
          <Route exact path="/Cart" element={<Cart />} />
          <Route exact path="/DeliveryAdress" element={<DeliveryAdress />} />
          <Route exact path="/PaymentPage" element={<PaymentPage />} />
          <Route exact path="/ViewallProduct" element={<ViewallProduct />} />
          <Route exact path="/cartcomponen" element={<Cartcomponent/>}/>
          <Route exact path="/EditProduct/:id" element={<EditProduct />}/>
          <Route exact path="/SelectPayment/:tp" element={<SelectPayment/>}/>   
          
        </Routes>
        {/* <Footer/> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
