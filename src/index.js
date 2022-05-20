import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import MainPage from './MainPage'

ReactDOM.render(
<BrowserRouter>
<Routes>
      <Route path="/*" element={<App />} />
      <Route path="/main" element={<MainPage />} />
</Routes>
</BrowserRouter>, document.getElementById('root'))
