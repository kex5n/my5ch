import React from 'react';
import { Thread } from './models/thread'

function App() {
  return (
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
}

export default App;
