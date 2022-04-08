import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './utils/styles/srOnly.css';
import { Home } from './pages/Home';
import { SignIn } from './pages/SignIn';
import { User } from './pages/User';
import { createGlobalStyle } from 'styled-components';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import Error from './pages/Error';
import { Provider } from 'react-redux';
import { store } from './utils/store';
import SessionExpiration from './components/SessionExpiration';

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
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/user" element={<User />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <SessionExpiration />
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
