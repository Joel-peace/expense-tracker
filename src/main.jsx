import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ExpenseForm from './assets/componet/ExpenseForm.jsx'
import ExpenseTable from './assets/componet/ExpenseTable.jsx'
import SearchBar from './assets/componet/ SearchBar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ExpenseForm/>
    <ExpenseTable/>
    <SearchBar/>
  </StrictMode>,
)
