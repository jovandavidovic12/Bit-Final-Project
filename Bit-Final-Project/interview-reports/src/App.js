import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CandidateReport from './components/candidate-reports/CandidateReport';
import { Main } from './components/main_page/main';
import Header from './components/header/Header';
import { Error } from './components/page-error/Error';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
            <Route index element={<Main />} />
            <Route path='/candidate-reports' element={<CandidateReport />} />
            <Route path='*' element={<Error />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;