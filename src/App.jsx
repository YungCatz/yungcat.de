import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Header.jsx'
import Content from './content.jsx'
import Form from './Form.jsx'
import Projects from './Projects.jsx'
import Knowledge from './Knowledge.jsx'

export default function App() {
    return (
      <>
        <Header />
        <Content />
        <Form />
        <Projects />
        <Knowledge />
      </>
    );
  }