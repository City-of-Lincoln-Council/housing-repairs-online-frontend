import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './index.scss'
import App from './App';
import reportWebVitals from './reportWebVitals';
import { TopNav, PhaseBanner, Footer, Main, Page, BackLink, H1 } from 'govuk-react';

ReactDOM.render(
  <React.StrictMode>
    <Page
      header={<TopNav company= "COLC" serviceTitle="Housing Repairs Online" />}
      beforeChildren={<PhaseBanner level="beta" data-testid="phase-banner">This service is still in beta</PhaseBanner>}
      footer={<Footer />}
    >
      <App />
    </Page>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
