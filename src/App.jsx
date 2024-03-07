import { Routes, Route } from "react-router-dom"
import Header from "./components/header/Header"
import Home from "./components/home/Home"
import NotFound from "./components/errors/NotFound"
import Footer from "./components/footer/Footer"
import About from "./components/about/About"

function App() {
  return (
    <div className="flex flex-col min-h-[100vh]">
      <Header />
      <Routes>
        <Route path="dearq-web/" element={<Home />} />
        <Route path="dearq-web/about" element={<About />} />
        <Route path="dearq-web/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
