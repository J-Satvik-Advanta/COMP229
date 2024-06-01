/* 
 * File name: main.tsx
 * Student's Name: Satvik Kumar Jain
 * StudentID: 301370624
 * Date: 2024-05-31
 */
/* main.tsx */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import '@tabler/core/dist/css/tabler.min.css';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
