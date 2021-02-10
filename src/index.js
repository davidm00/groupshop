import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import FirebaseProvider from './utils/firebase'
import { AppProvider } from './utils/context'

ReactDOM.render(
  <React.StrictMode>
    <FirebaseProvider>
      <AppProvider>
        <App />
      </AppProvider>
    </FirebaseProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
