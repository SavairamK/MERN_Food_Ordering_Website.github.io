import React from 'react'
import { Routes, Route } from 'react-router-dom'
import NavigationBar from './components/Navbar/NavigationBar'
import Sidebar from './components/Sidebar/Sidebar'
import Add from './pages/AddFood/Add'
import List from './pages/ListFood/List'
import Order from './pages/Orders/Order'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

  const url = 'http://localhost:4000'

  return (
    <>
      <div className="">
        <ToastContainer />
        <NavigationBar />
        <hr />
        <div className="app-content">
          <Sidebar />
          <Routes>
            <Route path='/add' element={<Add url={url} />} />
            <Route path='/list' element={<List url={url} />} />
            <Route path='/orders' element={<Order url={url} />} />
          </Routes>
        </div>
      </div >
    </>
  )
}

export default App
