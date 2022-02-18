import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Splash from './components/Splash';
import Login from './components/Login';
import { ThemeProvider } from '@mui/material/styles';
import { useTheme } from '@emotion/react';
import './index.css';

function App() {
  return (
    <ThemeProvider theme={useTheme} >
      <Router>
        <Routes>
          <Route path='/' element={<Splash />} /> 
          <Route path='/login' element={<Login />} />
        </Routes> 
      </Router>
    </ThemeProvider>
  );
}

export default App;
