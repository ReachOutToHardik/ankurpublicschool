// import { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client';
// import { BrowserRouter } from 'react-router-dom';  // ← ADD
// import App from './App.tsx';
// import './index.css';

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <BrowserRouter>   {/* ← ADD */}
//       <App />
//     </BrowserRouter>  {/* ← ADD */}
//   </StrictMode>,
// );



// new 
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';  // ← ADD
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>   {/* ← ADD */}
      <App />
    </BrowserRouter>  {/* ← ADD */}
  </StrictMode>,
);