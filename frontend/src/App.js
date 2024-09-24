import './App.css';
import Nav from './components/Nav'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import FeedbackHistory from './components/FeedbackHistory';
import Feedback from './components/feedback';
import ProductFeedback from './components/ProductFeedback';
import AverageRating from './components/AverageRating';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path="/" element={<Feedback/>} />
          <Route path="/history" element={<FeedbackHistory/>} />
          <Route path="/productfeedback" element={<ProductFeedback/>} />
          <Route path="/averagerating" element={<AverageRating/>} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
