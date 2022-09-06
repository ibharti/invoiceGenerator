import 'antd/dist/antd.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PrevBill from './pages/PrevBill';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/prevBill" element={<PrevBill />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
