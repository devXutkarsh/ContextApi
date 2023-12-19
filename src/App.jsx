// import React from 'react'
// import UserContextProvider from './context/UserContextProvider'


// function App() {
//   return (
//   <UserContextProvider>
//     <h1>Context api crash course </h1>
//  <Login />
//  <Profile />
//   </UserContextProvider>
//   )
// }

// export default App

// import './App.css'

import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'
function App() {
  

  return (
    <UserContextProvider>
      <h1>React with Chai and share is important</h1>
   <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App