import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import WalletProvider from './Context/WalletContext/WalletProvider.jsx'
import ExpenseProvider from './Context/ExpenseContext/ExpenseProvider.jsx'
import { SnackbarProvider } from 'notistack'


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <WalletProvider>
    <ExpenseProvider>
      <SnackbarProvider>
    <App />
      </SnackbarProvider>
    </ExpenseProvider>
   </WalletProvider>
  </StrictMode>,
)
