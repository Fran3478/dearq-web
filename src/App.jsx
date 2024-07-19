import { AuthProvider } from "./context/auth"
import AllRoutes from "./routes/AllRoutes"

function App() {

  return (
    <AuthProvider>
      <AllRoutes/>
    </AuthProvider>
  )
}

export default App
