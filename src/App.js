import logo from './logo.svg';
import './App.css';
import { Button } from 'antd';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthTemplate from './templates/AuthTemplate';
import LoginPage from './pages/loginPage/LoginPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* home template */}

        {/* auth template */}
        <Route path="/auth" element={<AuthTemplate />}>
          <Route path="login" element={<LoginPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
