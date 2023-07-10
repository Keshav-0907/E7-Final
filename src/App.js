import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Hero from './pages/Hero';
import Header from './components/Header'
import Footer from './components/Footer'
import './App.css'
import OurServices from './pages/OurServices';
import Why from './pages/Why';
import Contact from './pages/Contact';
import WhatsApp from './components/WhatsApp';
import About from './pages/About';
import ServicesMain from './pages/ServicesMain';
import Blog from './pages/Blog';
import KeyEnablers from './pages/Blogs/KeyEnablers';
import FutureOfeRetail from './pages/Blogs/FutureOfeRetail';
import LegalServices from './pages/MoreServicesPage/LegalServices';
import SetUpYourECom from './pages/MoreServicesPage/SetUpYourECom';
import ImagingAndCatalogingServices from './pages/MoreServicesPage/ImagingServices';
import GrowYourECom from './pages/MoreServicesPage/GrowYourECom';
import Testimonials from './pages/Testimonials';
import ERetailMarket from './pages/Blogs/ERetailsMarket';
import LegalServices1 from './pages/MoreServicesPage/LegalServices1'
import LegalServices2 from './pages/MoreServicesPage/LegalServices2';
import LegalServices3 from './pages/MoreServicesPage/LegalServices3';
import LegalServices4 from './pages/MoreServicesPage/LegalServices4';
import LegalServices5 from './pages/MoreServicesPage/LegalServices5';
import LegalServices6 from './pages/MoreServicesPage/LegalServices6';
import LegalServices7 from './pages/MoreServicesPage/LegalServices7';
import LegalServices8 from './pages/MoreServicesPage/LegalServices8';
import ImagingServices1 from './pages/MoreServicesPage/ImagingServices1';
import ImagingServices2 from './pages/MoreServicesPage/ImagingServices2';
import ImagingServices3 from './pages/MoreServicesPage/ImagingServices3';
import ImagingServices4 from './pages/MoreServicesPage/ImagingServices4';
import ImagingServices5 from './pages/MoreServicesPage/ImagingServices5';
import ImagingServices6 from './pages/MoreServicesPage/ImagingServices6';
import ImagingServices7 from './pages/MoreServicesPage/ImagingServices7';
import ImagingServices8 from './pages/MoreServicesPage/ImagingServices8';
import ImagingServices9 from './pages/MoreServicesPage/ImagingServices9';
import ImagingServices10 from './pages/MoreServicesPage/ImagingServices10';
import ImagingServices11 from './pages/MoreServicesPage/ImagingServices11';
import ImagingServices12 from './pages/MoreServicesPage/ImagingServices12';
import GrowServices1 from './pages/MoreServicesPage/GrowServices1';
import GrowServices2 from './pages/MoreServicesPage/GrowServices2';
import GrowServices3 from './pages/MoreServicesPage/GrowServices3';
import GrowServices4 from './pages/MoreServicesPage/GrowServices4';
import GrowServices5 from './pages/MoreServicesPage/GrowServices5';
import GrowServices6 from './pages/MoreServicesPage/GrowServices6';
import GrowServices7 from './pages/MoreServicesPage/GrowServices7';
import SetServices1 from './pages/MoreServicesPage/SetServices1';
import SetServices2 from './pages/MoreServicesPage/SetServices2';


const App = () => {
  return (
    <div>
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path='/' element={<Hero />} />
        <Route path='/services' element={<OurServices />} />
        <Route path='/why' element={<Why />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About/>}/>
        <Route path='/servicesmain' element={<ServicesMain/>}/>
        <Route path='/blog' element={<Blog/>} />
        <Route path='/testimonials' element={<Testimonials/>} />

        <Route path='/blog/e-retail-market-and-shopper-dynamics' element={<ERetailMarket/>} />
        <Route path='/blog/key-enablers-for-growth' element={<KeyEnablers/>} />
        <Route path='/blog/future-of-e-retail-in-india' element={<FutureOfeRetail/>} />
        
        <Route path='/services/legal-support' element={<LegalServices />} />
        <Route path='/services/set-up-your-e-commerce-bussiness' element={<SetUpYourECom />} />
        <Route path='/services/imaging-and-cataloging-services' element={<ImagingAndCatalogingServices />} />
        <Route path='/services/grow-your-e-commerce' element={<GrowYourECom />} />

        <Route path='/services/legal-support/gst-pan' element={<LegalServices1 />} />
        <Route path='/services/legal-support/msme' element={<LegalServices2 />} />
        <Route path='/services/legal-support/trade' element={<LegalServices3 />} />
        <Route path='/services/legal-support/fssai' element={<LegalServices4 />} />
        <Route path='/services/legal-support/import' element={<LegalServices5 />} />
        <Route path='/services/legal-support/apob' element={<LegalServices6 />} />
        <Route path='/services/legal-support/tax' element={<LegalServices7 />} />
        <Route path='/services/legal-support/other' element={<LegalServices8 />} />

        <Route path='/services/imaging-and-cataloging-services/photoshoot' element={<ImagingServices1 />} />
        <Route path='/services/imaging-and-cataloging-services/store' element={<ImagingServices2 />} />
        <Route path='/services/imaging-and-cataloging-services/a' element={<ImagingServices3 />} />
        <Route path='/services/imaging-and-cataloging-services/info' element={<ImagingServices4 />} />
        <Route path='/services/imaging-and-cataloging-services/video' element={<ImagingServices5 />} />
        <Route path='/services/imaging-and-cataloging-services/content' element={<ImagingServices6 />} />
        <Route path='/services/imaging-and-cataloging-services/graphic' element={<ImagingServices7 />} />
        <Route path='/services/imaging-and-cataloging-services/content-optimi' element={<ImagingServices8 />} />
        <Route path='/services/imaging-and-cataloging-services/usp' element={<ImagingServices9 />} />
        <Route path='/services/imaging-and-cataloging-services/product' element={<ImagingServices10 />} />
        <Route path='/services/imaging-and-cataloging-services/storyboard' element={<ImagingServices11 />} />
        <Route path='/services/imaging-and-cataloging-services/digital' element={<ImagingServices12 />} />

        <Route path='/services/grow-your-e-commerce/acc-manage' element={<GrowServices1 />} />  
        <Route path='/services/grow-your-e-commerce/product' element={<GrowServices2 />} />
        <Route path='/services/grow-your-e-commerce/pricing' element={<GrowServices3 />} />
        <Route path='/services/grow-your-e-commerce/visibility' element={<GrowServices4 />} />
        <Route path='/services/grow-your-e-commerce/time' element={<GrowServices5 />} />
        <Route path='/services/grow-your-e-commerce/data' element={<GrowServices6 />} />
        <Route path='/services/grow-your-e-commerce/acc-re' element={<GrowServices7 />} />

        <Route path='/services/set-up-your-e-commerce-bussiness/e-com' element={<SetServices1 />} />
        <Route path='/services/set-up-your-e-commerce-bussiness/global' element={<SetServices2 />} />



      </Routes>
      <Footer />
      <WhatsApp />
    </BrowserRouter>
    </div>
  )
}

export default App