import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Login, Submit, Privacy, Judges, Entries, Terms } from './pages';
import { RequireAuth } from './components/RequireAuth';
import { AuthProvider } from './context/AuthContext';
import { SubmissionProvider } from './context/SubmissionContext';

ReactDOM.render(
  <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route
            path="entries"
            element={
              <SubmissionProvider>
                <Entries />
              </SubmissionProvider>
            }
          />
          <Route path="judges" element={<Judges />} />
          <Route path="login" element={<Login />} />
          <Route
            path="submit"
            element={
              <RequireAuth>
                <Submit />
              </RequireAuth>
            }
          />
          <Route path="privacypolicy" element={<Privacy />} />
          <Route path="terms" element={<Terms />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </AuthProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
