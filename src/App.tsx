import React from "react"
import Header from "libs/components/molecules/Header"
import { Route, Routes } from "react-router-dom"
import Main from "libs/components/views/main"
import Mbux from "libs/components/views/mbux"
import KurashiruStore from "libs/components/views/kurashiruStore"
import EOW from "libs/components/views/eow"
import { ThemeProvider } from "@mui/material"
import theme from "libs/theme/theme"

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/works/mbux" element={<Mbux />} />
          <Route path="/works/kurashiru_store" element={<KurashiruStore />} />
          <Route path="/works/EOW" element={<EOW />} />
        </Routes>
      </ThemeProvider>
    </>
  )
}

export default App
