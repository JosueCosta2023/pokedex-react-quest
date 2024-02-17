import GlobalStyled from "./GlobalStyled"
import { ThemeProvider } from "./contexts/theme-context"
import AppRoutes from "./pages/routes"

function App() {
  return (
    <ThemeProvider>
      <GlobalStyled />
      <AppRoutes />
    </ThemeProvider>
  )
}

export default App
