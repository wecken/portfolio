import { createTheme } from "@mui/material"

// フォントを設定
const fontFamily = [
  "Helvetica Neue",
  "Arial",
  "Hiragino Kaku Gothic ProN",
  "Hiragino Sans",
  "Meiryo",
  "sans-serif",
  "sans-serif",
].join(",")

const theme = createTheme({
  typography: {
    fontFamily: fontFamily, // フォント
    h1: {
      fontSize: 28,
      fontWeight: 600,
      letterSpacing: 0,
      lineHeight: 1.3,
    },
    h2: {
      fontSize: 24,
      fontWeight: 300,
      letterSpacing: 0.25,
      lineHeight: 1.3,
    },
    h3: {
      fontSize: 20,
      fontWeight: 600,
      letterSpacing: 0.15,
      lineHeight: 1.3,
    },
    subtitle1: {
      fontSize: 17,
      fontWeight: 600,
      letterSpacing: 0.15,
      lineHeight: 1.3,
    },
    subtitle2: {
      fontSize: 14,
      fontWeight: 600,
      letterSpacing: 0.1,
      lineHeight: 1.3,
    },
  },
  palette: {
    // Primaryカラーを設定
    primary: {
      light: "#54C527",
      main: "#0B0B3A",
      dark: "#b26a00",
      contrastText: "#000000",
    },
    // Secondaryカラーを設定
    secondary: {
      light: "#33eb91",
      main: "#00e676",
      dark: "#00a152",
      contrastText: "#ffffff",
    },
  },
  mixins: {
    // ツールバーの高さ
    toolbar: {
      minHeight: 64,
    },
  },
})

export default theme
