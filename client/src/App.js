import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Splash from './components/Splash';
import { ThemeProvider } from '@mui/material/styles';
import { useTheme } from '@emotion/react';

function App() {
  return (
    <ThemeProvider theme={useTheme} >
      <Router>
        <Routes>
          <Route path='/' element={<Splash />} /> 
        </Routes> 
      </Router>
    </ThemeProvider>
  );
}

export default App;
