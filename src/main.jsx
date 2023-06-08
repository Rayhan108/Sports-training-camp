import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  
  RouterProvider,
} from "react-router-dom";
import './index.css'
import { Toaster } from 'react-hot-toast'
import router from './routes/routes/router';
import AuthProvider from './Provider/AuthProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AuthProvider>
  <Toaster />
    <RouterProvider router={router} />
  </AuthProvider>
  </React.StrictMode>,
)
