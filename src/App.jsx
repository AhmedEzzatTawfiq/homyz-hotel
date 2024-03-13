import React, { Suspense } from "react";

const Header = React.lazy(() => import("./components/1-Header/Header"));
const Hero = React.lazy(() => import("./components/2-Hero/Hero"));
const Sponser = React.lazy(() => import("./components/3-Sponser/Sponser"));
const Residencies = React.lazy(() => import("./components/4-Residencies/Residencies"));
const Value = React.lazy(() => import("./components/5-Value/Value"));
const Contact = React.lazy(() => import("./components/6-Contact/Contact"));
const Getstarted = React.lazy(() => import("./components/7-GetStarted/Getstarted"));
const Footer = React.lazy(() => import("./components/8-Footer/Footer"));
import "./App.css";

function App() {
  return (
    <div className='App'>
      <Suspense fallback={<div></div>}>
      <div className='white-gradient'/>
      <Header />
      <Hero />
      <Sponser />
      <Residencies />
      <Value />
      <Contact />
      <Getstarted /> 
      <Footer /> 
      </Suspense>    
    </div>
  );
}

export default App;

