import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./utils/Home";
import Password from "./utils/Password";
import Relink from "./utils/Relink";
import "./App.css"; // Ensure your CSS handles global responsive design where needed

import OderAndPay from "./utils/OderAndPay";
import Caurosel from "./utils/Caurosel";
import Container3 from "./utils/Container3";
import Container4 from "./utils/Container4";
import Short from "./utils/Short";
import WhoWeAre from "./utils/WhoWeAre";
import Footer from "./utils/Footer";
import PayAtTable from "./utils/PayAtTable";


function App() {
  return (
    <Router>
      <div className="min-h-screen w-full flex flex-col bg-gray-100">
        {/* Main routes configuration */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pass" element={<Password />} />
          <Route path="/relink" element={<Relink />} />
          <Route path="/caur" element={<Caurosel/>}/>
          <Route path="/pay" element={<OderAndPay/>}/>
          <Route path="/container"element={<Container3/>}/>
        <Route path="/short"element={<Short/>}/>
          <Route path="/container4"element={<Container4/>}/>
          <Route path="/who"element={<WhoWeAre/>}/>
          <Route path="/footer"element={<Footer/>}/>
          <Route path="/table"element={<PayAtTable/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
