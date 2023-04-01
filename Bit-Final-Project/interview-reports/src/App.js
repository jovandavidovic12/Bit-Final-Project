import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CandidateReport from './components/candidate-reports/CandidateReport';
import { Main } from './components/main_page/main';
import Header from './components/header/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
            <Route path = '/home'index element={<Main />} />
            <Route path='/candidate-reports' element={<CandidateReport />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;