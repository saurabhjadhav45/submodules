import App from './App';
import './assets/i18n';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root') as HTMLElement);

function RootApp() {
  return (
    <StrictMode>
      <App />
    </StrictMode>
  );
}

root.render(<RootApp />);
reportWebVitals();
