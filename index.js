// import React from 'react';
// import ReactDOM from 'react-dom/client';

// import App from './App';
// // import reportWebVitals from './reportWebVitals';
// import { Provider } from 'react-redux';
// import { Store } from './Store/Store';
// // export const Store = createStore();


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Provider store ={Store}>
//     <App/>
//     </Provider>
//   </React.StrictMode>
// );


import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import Store from './Store/Store';  // ✅ Correct

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={Store}>
      <App />
    </Provider>
  </React.StrictMode>
);




