import React from "react"
import Header from "libs/components/molecules/Header"
import { Route, Router, Routes } from "react-router-dom"
import Main from "libs/components/views/main"
import Mbux from "libs/components/views/mbux"
import KurashiruStore from "libs/components/views/kurashiruStore"

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/mbux" element={<Mbux />} />
        <Route path="/kurashiru_store" element={<KurashiruStore />} />
      </Routes>
    </>
  )
}

export default App
