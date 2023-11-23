import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
const queryClient = new QueryClient()
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { Router } from './Routes/Router'
import AuthProvider from './Provider/AuthProvider'
 
 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <QueryClientProvider client={queryClient}>
    <div>
        <RouterProvider router={Router}>  
      </RouterProvider>
      </div>
    </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>,
)
