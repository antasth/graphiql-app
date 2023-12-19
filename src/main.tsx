import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './app';
import { ErrorBoundary } from 'react-error-boundary';
import { ErrorPage } from '@/components/ErrorPage/ErrorPage';
import './index.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary fallback={<ErrorPage />}>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
