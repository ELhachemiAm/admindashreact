// import {
//   createBrowserRouter,
//   RouterProvider,
//   Route,
//   Link,
// } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/home/Home'
import Login from './pages/login/Login'
import List from './pages/list/List'
import Single from './pages/single/Single'
import New from './pages/new/New';
import { userInputs, productInputs } from './formsource';
import { useContext } from 'react';
import { DarkModeContext } from './context/darkModeContext';
import './style/dark.scss'

function App() {

  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Home/>
  //   },
  //   {
  //     path: "login",
  //     element: <Login />,
  //   },
  //   {
  //     path: "users",
  //     element: <List />,
  //   },
  // ]);

  const {darkMode} = useContext(DarkModeContext)
  return (
    <div className={ darkMode ? "dark app" : "App"}>
      {/* <RouterProvider router={router} /> */}
      <Router>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path='users'>
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route path="new" element={<New inputs={userInputs} title="Add New User" />} />
            </Route>
            <Route path='products'>
              <Route index element={<List />} />
              <Route path=":productId" element={<Single />} />
              <Route path="new" element={<New inputs = {productInputs} title="Add New Product" />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </div>
  )
}


export default App
