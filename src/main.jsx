import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  
  RouterProvider,
} from "react-router-dom";
import './index.css'
import { Toaster } from 'react-hot-toast'
import router from './routes/routes/router';
import AuthProvider from './Provider/AuthProvider';
import {  HelmetProvider } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

<AuthProvider>
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
   <div className='overflow-hidden'>
   <Toaster />
    <RouterProvider router={router} />
   </div>
      </QueryClientProvider>
  
    </HelmetProvider>
  </AuthProvider>

  </React.StrictMode>,
)
