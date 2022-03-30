import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Layout from './components/Layout/Layout';
import { Container } from 'react-bootstrap';


ReactDOM.render(
  <Container>
    <Layout>
      <App />
    </Layout>
  </Container>,
  document.getElementById('root')
);