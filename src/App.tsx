// /**
//  * @license
//  * SPDX-License-Identifier: Apache-2.0
//  */

// import Header from './components/Header';
// import Hero from './components/Hero';
// import LatestUpdates from './components/LatestUpdates';
// import About from './components/About';
// import Leadership from './components/Leadership';
// import Facilities from './components/Facilities';
// import Gallery from './components/Gallery';
// import Testimonials from './components/Testimonials';
// import Contact from './components/Contact';
// import Footer from './components/Footer';

// export default function App() {
//   return (
//     <div className="min-h-screen flex flex-col font-sans">
//       <Header />
//       <LatestUpdates />
//       <main className="flex-grow">
//         <Hero />
//         <About />
//         <Leadership />
//         <Facilities />
//         <Gallery />
//         <Testimonials />
//         <Contact />
//       </main>
//       <Footer />
//     </div>
//   );
// }



// New one 

import { Routes, Route } from 'react-router-dom';  // ← ADD
import Header from './components/Header';
import Hero from './components/Hero';
import LatestUpdates from './components/LatestUpdates';
import About from './components/About';
import Leadership from './components/Leadership';
import Facilities from './components/Facilities';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AdmissionEnquiry from './pages/AdmissionEnquiry';  // ← ADD

export default function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Routes>   {/* ← ADD */}

        {/* Home page — everything as it was */}
        <Route path="/" element={
          <>
            <Header />
            <LatestUpdates />
            <main className="flex-grow">
              <Hero />
              <About />
              <Leadership />
              <Facilities />
              <Gallery />
              <Testimonials />
              <Contact />
            </main>
            <Footer />
          </>
        } />

        {/* Admission page */}
        <Route path="/admission-enquiry" element={<AdmissionEnquiry />} />  {/* ← ADD */}

      </Routes>   {/* ← ADD */}
    </div>
  );
}