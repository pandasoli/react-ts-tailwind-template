import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from '@pages/home'


export default () =>
  <BrowserRouter>
    <Routes>
      <Route path='/' element={ <Home/> }/>
    </Routes>
  </BrowserRouter>
