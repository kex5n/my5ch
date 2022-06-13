import React from 'react';
import ReactDOM from 'react-dom/client';
import { Thread } from './models/thread';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <div>
      <header>
        <h1>お前とひろゆきの5ch</h1>
      </header>
      <main>
        <h2>ひろゆきだけど質問ある？</h2>
          <Thread />
      </main>
    </div>
  </React.StrictMode>
);
