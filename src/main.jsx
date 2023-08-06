import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Header.jsx'
import Content from './content.jsx'
import './index.css'
import Example from './Example.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Example />
    <Content />
  </React.StrictMode>,
)