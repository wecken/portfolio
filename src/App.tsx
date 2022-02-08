import React from "react"
import Header from "libs/components/molecules/Header"
import { Route, Routes } from "react-router-dom"
import Main from "libs/components/views/main"
import Mbux from "libs/components/views/mbux"
import KurashiruStore from "libs/components/views/kurashiruStore"
import EOW from "libs/components/views/eow"
import { ThemeProvider } from "@mui/material"
import theme from "libs/theme/theme"
import i18n from "i18next"
import detector from "i18next-browser-languagedetector"
import { initReactI18next } from "react-i18next"
import { JA_JP, EN_US } from "libs/translations"
const resources = {
  ja: JA_JP,
  en: EN_US,
}

// const initialLang: SupportedLanguage = "ja"

i18n
  .use(initReactI18next)
  .use(detector)
  .init({
    resources,
    // lng: initialLang,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  })

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
