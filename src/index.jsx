import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from } 
//import Hello from './Hello'; 
//import reportWebVitals from './reportWebVitals';
import Counter from './counter';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/*<App />*/}
    {/* <Hello name="Lalana" surname="Prasitthisan" weight="44"/>
    <Hello name="Siwakorn" surname="Phokpong" weight="58"/>
    <Hello name="Arm" weight="55"/>
    <Hello name="Khao" weight="54"/> */}
    <Counter />

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
