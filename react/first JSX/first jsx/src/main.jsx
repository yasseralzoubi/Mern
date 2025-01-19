import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import MyToDoList from './MyToDoList'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyToDoList />  
  </StrictMode>,
)
