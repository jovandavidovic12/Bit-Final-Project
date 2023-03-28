import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CandidateReport from './components/candidate-reports/CandidateReport';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/candidate-reports' element={<CandidateReport />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
