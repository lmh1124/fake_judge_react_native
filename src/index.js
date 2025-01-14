import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import { AppRegistry } from 'react-native';
import App from './src/App'; // src/App.js에서 App 가져오기
import { name as appName } from './app.json';


AppRegistry.registerComponent(appName, () => App);
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// reportWebVitals();
