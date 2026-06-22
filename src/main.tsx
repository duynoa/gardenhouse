import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import { CostCalculationProvider } from './lib/costCalculationStore';
import { AuthProvider } from './lib/admin/AuthContext';
import { AppQueryProvider } from './lib/admin/AppQueryProvider';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <AppQueryProvider>
        <AuthProvider>
          <CostCalculationProvider>
            <App />
          </CostCalculationProvider>
        </AuthProvider>
      </AppQueryProvider>
    </BrowserRouter>
  </StrictMode>,
);
