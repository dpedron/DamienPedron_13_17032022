import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './utils/styles/srOnly.css';
import { Home } from './pages/Home';
import { SignIn } from './pages/SignIn';
import { User } from './pages/User';
import { createGlobalStyle } from 'styled-components';
import { Footer } from './components/Footer';

const GlobalStyle = createGlobalStyle`
  html {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  body, #root {
    margin: 0;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  
`;

/**
 * @description App router
 * @returns {JSX}
 */

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/user" element={<User />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
