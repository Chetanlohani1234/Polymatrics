import { BrowserRouter,Routes,Route } from "react-router-dom";
import IndexThree from './Home/index-three';
import IndexTwo from './Home/index-two';
import IndexOne from "./Home/index-one";
import IndexFour from "./Home/index-four";
import IndexFive from "./Home/index-five";
import UseCase from "./Pages/useCase";
import AboutOpenUp from "./Pages/AboutOpenUp";
import Blog from "./Pages/Blog";
import BlogDetails from "./Pages/BlogDetails";
import Contact from "./Pages/Contact";
import FAQ from "./Pages/FAQ";
import Login from "./Pages/Login";
import Pricing from "./Pages/Pricing";
import Pricing2 from "./Pages/Pricing2";
import Pricing3 from "./Pages/Pricing3";
import Register from "./Pages/Register";
import Reset from "./Pages/Reset";
import UseCases2 from "./Pages/UseCases2";
import UseCasesDetails2 from "./Pages/UseCasesDetails2";
import UseCasesDetails from "./Pages/UseCasesDetails";
import Feature from "./Feature";
import Cart from "./Shop/Cart";
import Checkout from "./Shop/Checkout";
import MyAccount from "./Shop/MyAccount";
import ProductDetails from "./Shop/ProductDetails";
import Soon from "./Pages/soon";
import Header from "./Pages/Header";
import Footer from "./Pages/Footer";

function App() {
  return (
    <>
     {/* <IndexThree /> */}
     {/* <IndexTwo /> */}
     <BrowserRouter>
     <Header/>
      <Routes>
        <Route path="/IndexOne" element={<IndexOne />}/>
        <Route path="/" element={<IndexTwo />} />
        <Route path="/IndexThree" element={<IndexThree />} />
        <Route path="/IndexFour" element={<IndexFour />}/>
        <Route path="/IndexFive" element={<IndexFive />}/>
        <Route path="/UseCase" element={<UseCase />}/>
        <Route path="/Soon" element={<Soon/>}/>
        

        <Route path="/AboutOpenUp" element={<AboutOpenUp />}/>
        <Route path="/Blog" element={<Blog />}/>
        <Route path="/BlogDetails" element={<BlogDetails />}/>
        <Route path="/Contact" element={<Contact />}/>
        <Route path="/FAQ" element={<FAQ />}/>
        <Route path="/Login" element={<Login />}/>
        <Route path="/Pricing" element={<Pricing />}/>
        <Route path="/Pricing2" element={<Pricing2 />}/>
        <Route path="/Pricing3" element={<Pricing3 />}/>
        <Route path="/Register" element={<Register />}/>
        <Route path="/Reset" element={<Reset />}/>
        <Route path="/UseCasesDetails" element={<UseCasesDetails />}/>
        <Route path="/UseCases2" element={<UseCases2 />}/>
        <Route path="/UseCasesDetails2" element={<UseCasesDetails2 />}/>
        <Route path="/Feature" element={<Feature />}/>
        <Route path="/ProductDetails" element={<ProductDetails />}/>
        <Route path="/Cart" element={<Cart/>}/>
        <Route path="/Checkout" element={<Checkout/>}/>
        <Route path="/MyAccount" element={<MyAccount/>}/>
      </Routes>
      <Footer />
     </BrowserRouter>
  
    </>

  );
}

export default App;
