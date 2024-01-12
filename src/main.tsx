import React from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.tsx'
import './app/styles/index.sass'

const domNode = document.getElementById('root');
const root = createRoot(domNode);

root.render(<App />);