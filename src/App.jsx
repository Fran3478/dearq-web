import { Routes, Route } from "react-router-dom"
import Header from "./components/header/Header"
import Home from "./components/home/Home"
import NotFound from "./components/errors/NotFound"
import Footer from "./components/footer/Footer"
import About from "./components/about/About"
import Service from "./components/service/Service"

function App() {
  return (
    <div className="flex flex-col min-h-[100vh]">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Service />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
