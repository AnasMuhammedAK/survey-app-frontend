import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/Home/HomePage';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import ProtectRouter from './components/Protect/ProtectRouter';
import Unauthorized from "./components/UnAuth/UnAuthorized";
import AddQuestion from './components/survey/AddQuestion';
import { Toaster } from 'react-hot-toast'
import QuetionsList from './components/QstnList/QuetionsList';
import Survey from './components/survey/Survey';
import Wallet from './components/wallet/Wallet';
import SurveyList from './components/survey/SurveyList';
import SurveyData from './components/survey/SurveyData';



const ROLES = {
  Admin: "Admin",
  User: "User"
}
function App() {
  return (
    <Router>
      <Navbar />
      <Toaster />
      <Routes>
        {/* Can Access Admin, User and Guest*/}
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/unauthorized" element={<Unauthorized />} />

        {/* Can Access Admin only */}
        <Route path="/" element={<ProtectRouter allowedRoles={[ROLES.Admin]} />} >
          <Route path='add-question' element={<AddQuestion />} />
          <Route path='questions' element={<QuetionsList />} />
          <Route path='surveys' element={<SurveyList />} />
          <Route path='survey-data/:surveyId' element={<SurveyData />} />
        </Route>

        {/* Can Access Admin And Users */}
        <Route path="/" element={<ProtectRouter allowedRoles={[ROLES.Admin,ROLES.User]} />} >
          <Route path='survey' element={<Survey />} />
          <Route path='wallet' element={<Wallet />} />
        </Route>

      </Routes>
    </Router>
  );
}

export default App;
