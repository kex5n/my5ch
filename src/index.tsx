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
        <h2>スレッドタイトル</h2>
          <Thread />
      </main>
    </div>
  </React.StrictMode>
);

function onClick(e: Event) {
  const target = e;
  if (!(target instanceof HTMLInputElement)) {
    return;
  }  
  // const kakiko = new Kakiko(props.number, props.name, props.time, props.userid, props.contenttext);
  // const thread = new Thread();
  // thread.contents.push(kakiko);
}
