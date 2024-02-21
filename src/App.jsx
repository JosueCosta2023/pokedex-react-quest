import GlobalStyled from "./GlobalStyled"
import { ThemeProviderComponent } from "./contexts/theme-context"

import AppRoutes from "./pages/routes"

function App() {
  return (
    <ThemeProviderComponent>
      <GlobalStyled />
      <AppRoutes />
    </ThemeProviderComponent>
  )
}

export default App
