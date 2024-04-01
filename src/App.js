import logo from './logo.svg';
import './App.css';
import { Button } from 'antd';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthTemplate from './templates/AuthTemplate';
import LoginPage from './pages/loginPage/LoginPage';
import { useEffect } from 'react';
import { userSer } from './service/userSer';
import HomeTemplate from './templates/HomeTemplate';
import HomePage from './pages/HomePage/HomePage';
import DetailPage from './pages/DetailPage/DetailPage';
import ScreenPage from './pages/ScreenPage/ScreenPage';
import Loading from './components/Loading/Loading';

function App() {
  return (
    <BrowserRouter>
      <Loading />
      <Routes>
        {/* home template */}
        <Route path="" element={<HomeTemplate />}>
          <Route index element={<HomePage />} />
          <Route path="detail-movie/:idMovie" element={<DetailPage />} />
          <Route path="screen/:maLichChieu" element={<ScreenPage />} />
        </Route>
        {/* auth template */}
        <Route path="/auth" element={<AuthTemplate />}>
          <Route path="login" element={<LoginPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
