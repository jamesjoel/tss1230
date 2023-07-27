import React from 'react'
import Header from './components/shared/Header/Header'
import Footer from './components/shared/Footer/Footer'
import AllRoutes from './routes/AllRoutes'
const App = () => {
  return (
    <>
      <Header />
        <AllRoutes />
      <Footer />
    </>
  )
}

export default App