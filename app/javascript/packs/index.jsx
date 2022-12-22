// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import App from '../src/components/App'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createRoot } from 'react-dom/client';


const root = ReactDOMCLient.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<App />}></Route>
      </Routes>
    </BrowserRouter>,

    document.body.appendChild(document.createElement('div')),
)

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<App />}></Route>
      </Routes>
    </BrowserRouter>,

    document.body.appendChild(document.createElement('div')),
  )
})
