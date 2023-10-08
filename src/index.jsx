import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Utilisez Routes ici
import Home from './pages/Home';
import Survey from './pages/Survey';
import Results from './pages/Results';
import Freelances from './pages/Freelances';
import Profile from './pages/Profile';
import Header from './components/Header';
import Footer from './components/Footer';
import Error from './components/Error';
import GlobalStyle from './utils/style/GlobalStyle';
import { SurveyProvider } from './utils/context';
import { Provider } from 'react-redux';
import store from './utils/store';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router>
        <SurveyProvider>
          <GlobalStyle />
          <Header />
          {/* Utilisez Routes pour gérer les routes */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/survey/:questionNumber" element={<Survey />} />
            <Route path="/results" element={<Results />} />
            <Route path="/freelances" element={<Freelances />} />
            <Route path="/profile/:id" element={<Profile />} />
            <Route path="*" element={<Error />} /> {/* Route par défaut pour les erreurs 404 */}
          </Routes>
          <Footer />
        </SurveyProvider>
      </Router>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
